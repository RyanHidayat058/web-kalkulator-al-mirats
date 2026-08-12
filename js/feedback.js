/**
 * ==========================================================================
 * Web Kalkulator Al-Mirats - Feedback Form Module
 * ==========================================================================
 */

let selectedRating = 5;

function initFeedbackForm() {
  const container = document.getElementById("feedback-container");
  if (!container) return;

  container.innerHTML = `
    <div class="card">
      <div class="card-header">
        <h3 class="card-title"><i class="fas fa-comment-dots"></i> Umpan Balik & Saran</h3>
      </div>
      
      <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
        Kritik, saran, dan masukan Anda sangat berharga untuk pengembangan dan penyempurnaan kalkulator ini.
      </p>

      <form id="feedbackForm" onsubmit="handleFeedbackSubmit(event)">
        <div class="form-group">
          <label class="form-label">Rating Pengalaman Anda</label>
          <div id="rating-stars" style="display: flex; gap: 0.5rem; font-size: 1.75rem; color: #f59e0b; cursor: pointer; margin-bottom: 1rem;">
            <i class="fas fa-star" onclick="setRating(1)"></i>
            <i class="fas fa-star" onclick="setRating(2)"></i>
            <i class="fas fa-star" onclick="setRating(3)"></i>
            <i class="fas fa-star" onclick="setRating(4)"></i>
            <i class="fas fa-star" onclick="setRating(5)"></i>
          </div>
        </div>

        <div class="form-group">
          <label class="form-label" for="fb-nama">Nama Lengkap</label>
          <input type="text" id="fb-nama" class="form-control" style="padding-left: 1rem;" placeholder="Masukkan nama Anda" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="fb-email">Alamat Email</label>
          <input type="email" id="fb-email" class="form-control" style="padding-left: 1rem;" placeholder="nama@email.com" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="fb-pesan">Pesan / Saran</label>
          <textarea id="fb-pesan" class="form-control" style="padding-left: 1rem; min-height: 120px; resize: vertical;" placeholder="Tuliskan umpan balik atau kendala yang Anda temui..." required></textarea>
        </div>

        <button type="submit" class="btn btn-primary" style="width: 100%;">
          <i class="fas fa-paper-plane"></i> Kirim Umpan Balik
        </button>
      </form>

      <div id="fb-success-banner" class="alert-banner alert-info" style="display: none; margin-top: 1.25rem;">
        <i class="fas fa-check-circle" style="font-size: 1.2rem;"></i>
        <div>
          <strong>Terima Kasih!</strong> Umpan balik Anda telah berhasil disimpan secara lokal dan terkirim.
        </div>
      </div>
    </div>
  `;
  setRating(5);
}

function setRating(rating) {
  selectedRating = rating;
  const stars = document.querySelectorAll("#rating-stars i");
  stars.forEach((star, idx) => {
    if (idx < rating) {
      star.className = "fas fa-star";
    } else {
      star.className = "far fa-star";
    }
  });
}

function handleFeedbackSubmit(event) {
  event.preventDefault();
  const nama = document.getElementById("fb-nama").value;
  const email = document.getElementById("fb-email").value;
  const pesan = document.getElementById("fb-pesan").value;

  const feedbackObj = {
    nama,
    email,
    pesan,
    rating: selectedRating,
    timestamp: new Date().toISOString()
  };

  // Save to LocalStorage
  const existing = JSON.parse(localStorage.getItem("almirats_feedback") || "[]");
  existing.push(feedbackObj);
  localStorage.setItem("almirats_feedback", JSON.stringify(existing));

  // Show Success Banner
  const banner = document.getElementById("fb-success-banner");
  if (banner) {
    banner.style.display = "flex";
  }

  // Reset form
  document.getElementById("feedbackForm").reset();
  setRating(5);

  setTimeout(() => {
    if (banner) banner.style.display = "none";
  }, 5000);
}
