/**
 * ==========================================================================
 * Web Kalkulator Al-Mirats - Feedback Form Module (Email Integration)
 * Directly submits feedback to ryan86877@gmail.com via FormSubmit & Mailto
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
        Kritik, saran, dan masukan Anda sangat berharga. Umpan balik akan dikirimkan langsung ke email pengembang di <strong>ryan86877@gmail.com</strong>.
      </p>

      <form id="feedbackForm" action="https://formsubmit.co/ryan86877@gmail.com" method="POST" onsubmit="saveFeedbackLocally()">
        <!-- Hidden FormSubmit Configuration Fields -->
        <input type="hidden" name="_subject" value="[Umpan Balik Al-Mirats Web]">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_template" value="table">
        <input type="hidden" id="fb-rating-hidden" name="Rating" value="5 / 5 Bintang">

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
          <input type="text" id="fb-nama" name="Nama" class="form-control" style="padding-left: 1rem;" placeholder="Masukkan nama Anda" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="fb-email">Alamat Email Anda</label>
          <input type="email" id="fb-email" name="Email" class="form-control" style="padding-left: 1rem;" placeholder="nama@email.com" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="fb-pesan">Pesan / Saran</label>
          <textarea id="fb-pesan" name="Pesan_Saran" class="form-control" style="padding-left: 1rem; min-height: 120px; resize: vertical;" placeholder="Tuliskan umpan balik atau kendala yang Anda temui..." required></textarea>
        </div>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-bottom: 1rem;">
          <button type="submit" id="fb-submit-btn" class="btn btn-primary" style="flex: 1; min-width: 200px;">
            <i class="fas fa-paper-plane"></i> Kirim Form (FormSubmit)
          </button>
          
          <button type="button" class="btn btn-secondary" onclick="sendViaMailto()">
            <i class="fas fa-envelope"></i> Kirim Langsung (Buka Gmail)
          </button>
        </div>

        <div class="alert-banner alert-info" style="font-size: 0.85rem; font-weight: 500;">
          <i class="fas fa-info-circle" style="font-size: 1.1rem; color: var(--primary);"></i>
          <div>
            <strong>Catatan Pengiriman:</strong>
            <ul style="margin-left: 1.25rem; margin-top: 0.25rem; color: var(--text-main);">
              <li><strong>Tombol Kirim Form (FormSubmit)</strong>: Pengiriman otomatis melalui layanan FormSubmit.co. Jika baru pertama kali, FormSubmit akan mengirim 1 email aktivasi dari <em>FormSubmit</em> ke <code>ryan86877@gmail.com</code> (cek inbox/spam/promosi) untuk konfirmasi 1 kali.</li>
              <li><strong>Tombol Kirim Langsung (Buka Gmail)</strong>: Membuka aplikasi Gmail/Mail Anda dengan draft pesan yang sudah terisi lengkap, tinggal tekan Kirim 100% langsung sampai tanpa aktivasi.</li>
            </ul>
          </div>
        </div>
      </form>
    </div>
  `;
  setRating(5);
}

function setRating(rating) {
  selectedRating = rating;
  const ratingInput = document.getElementById("fb-rating-hidden");
  if (ratingInput) {
    ratingInput.value = `${rating} / 5 Bintang`;
  }

  const stars = document.querySelectorAll("#rating-stars i");
  stars.forEach((star, idx) => {
    if (idx < rating) {
      star.className = "fas fa-star";
    } else {
      star.className = "far fa-star";
    }
  });
}

function saveFeedbackLocally() {
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

  // Save to LocalStorage backup
  const existing = JSON.parse(localStorage.getItem("almirats_feedback") || "[]");
  existing.push(feedbackObj);
  localStorage.setItem("almirats_feedback", JSON.stringify(existing));
}

function sendViaMailto() {
  const nama = document.getElementById("fb-nama").value || "Pengguna";
  const email = document.getElementById("fb-email").value || "";
  const pesan = document.getElementById("fb-pesan").value || "";

  const subject = encodeURIComponent(`[Umpan Balik Al-Mirats Web] Dari ${nama}`);
  const body = encodeURIComponent(
    `Nama Pengirim: ${nama}\nEmail Pengirim: ${email}\nRating: ${selectedRating}/5 Bintang\n\nPesan / Saran:\n${pesan}`
  );

  window.location.href = `mailto:ryan86877@gmail.com?subject=${subject}&body=${body}`;
}
