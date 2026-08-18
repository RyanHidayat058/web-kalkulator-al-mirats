/**
 * ==========================================================================
 * Web Kalkulator Al-Mirats - Feedback Form Module (Email Integration)
 * Directly submits feedback to ryan86877@gmail.com
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
        Kritik, saran, dan masukan Anda sangat berharga. Umpan balik akan dikirimkan langsung ke pengembang di <strong>ryan86877@gmail.com</strong>.
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
          <label class="form-label" for="fb-email">Alamat Email Anda</label>
          <input type="email" id="fb-email" class="form-control" style="padding-left: 1rem;" placeholder="nama@email.com" required>
        </div>

        <div class="form-group">
          <label class="form-label" for="fb-pesan">Pesan / Saran</label>
          <textarea id="fb-pesan" class="form-control" style="padding-left: 1rem; min-height: 120px; resize: vertical;" placeholder="Tuliskan umpan balik atau kendala yang Anda temui..." required></textarea>
        </div>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <button type="submit" id="fb-submit-btn" class="btn btn-primary" style="flex: 1; min-width: 200px;">
            <i class="fas fa-paper-plane"></i> Kirim Umpan Balik ke Email
          </button>
          
          <button type="button" class="btn btn-secondary" onclick="sendViaMailto()">
            <i class="fas fa-envelope"></i> Buka Email Client
          </button>
        </div>
      </form>

      <div id="fb-success-banner" class="alert-banner alert-info" style="display: none; margin-top: 1.25rem;">
        <i class="fas fa-check-circle" style="font-size: 1.2rem;"></i>
        <div>
          <strong>Terima Kasih!</strong> Umpan balik Anda telah terkirim ke <strong>ryan86877@gmail.com</strong>.
        </div>
      </div>
      
      <div id="fb-error-banner" class="alert-banner alert-danger" style="display: none; margin-top: 1.25rem;">
        <i class="fas fa-exclamation-triangle" style="font-size: 1.2rem;"></i>
        <div>
          <strong>Informasi:</strong> Umpan balik telah disimpan secara lokal. Anda juga dapat mengirimkannya via tombol "Buka Email Client".
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

async function handleFeedbackSubmit(event) {
  event.preventDefault();
  const nama = document.getElementById("fb-nama").value;
  const email = document.getElementById("fb-email").value;
  const pesan = document.getElementById("fb-pesan").value;
  const btn = document.getElementById("fb-submit-btn");

  const feedbackObj = {
    nama,
    email,
    pesan,
    rating: selectedRating,
    timestamp: new Date().toISOString()
  };

  // 1. Save to LocalStorage backup
  const existing = JSON.parse(localStorage.getItem("almirats_feedback") || "[]");
  existing.push(feedbackObj);
  localStorage.setItem("almirats_feedback", JSON.stringify(existing));

  // 2. Disable button during submit
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Mengirim ke ryan86877@gmail.com...`;
  }

  // 3. Send email via FormSubmit API endpoint
  try {
    const response = await fetch("https://formsubmit.co/ajax/ryan86877@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        _subject: `[Umpan Balik Al-Mirats] Dari ${nama}`,
        Nama: nama,
        Email: email,
        Rating: `${selectedRating} / 5 Bintang`,
        Pesan: pesan,
        Tanggal: new Date().toLocaleString("id-ID")
      })
    });

    const result = await response.json();

    const banner = document.getElementById("fb-success-banner");
    if (banner) {
      banner.style.display = "flex";
    }

    document.getElementById("feedbackForm").reset();
    setRating(5);

    setTimeout(() => {
      if (banner) banner.style.display = "none";
    }, 6000);

  } catch (err) {
    console.error("Email submission error:", err);
    const errBanner = document.getElementById("fb-error-banner");
    if (errBanner) {
      errBanner.style.display = "flex";
      setTimeout(() => { errBanner.style.display = "none"; }, 6000);
    }
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `<i class="fas fa-paper-plane"></i> Kirim Umpan Balik ke Email`;
    }
  }
}

function sendViaMailto() {
  const nama = document.getElementById("fb-nama").value || "Pengguna";
  const email = document.getElementById("fb-email").value || "";
  const pesan = document.getElementById("fb-pesan").value || "";

  const subject = encodeURIComponent(`[Umpan Balik Al-Mirats Web] Dari ${nama}`);
  const body = encodeURIComponent(
    `Nama: ${nama}\nEmail Pengirim: ${email}\nRating: ${selectedRating}/5 Bintang\n\nPesan / Saran:\n${pesan}`
  );

  window.location.href = `mailto:ryan86877@gmail.com?subject=${subject}&body=${body}`;
}
