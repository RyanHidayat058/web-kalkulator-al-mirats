/**
 * ==========================================================================
 * Web Kalkulator Al-Mirats - Feedback Form Module (Web3Forms API Integration)
 * Directly submits feedback to ryan86877@gmail.com in the background
 * Access Key: 478439a5-6823-48ad-afaf-0d75a40be3f9
 * ==========================================================================
 */

let selectedRating = 5;
const WEB3FORMS_ACCESS_KEY = "478439a5-6823-48ad-afaf-0d75a40be3f9";

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

      <form id="feedbackForm" onsubmit="handleDirectFeedbackSubmit(event)">
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
          <button type="submit" id="fb-submit-btn" class="btn btn-primary" style="flex: 1; min-width: 220px;">
            <i class="fas fa-paper-plane"></i> Kirim Umpan Balik
          </button>
          
          <button type="button" class="btn btn-secondary" onclick="sendViaMailto()">
            <i class="fas fa-envelope"></i> Kirim via Aplikasi Gmail
          </button>
        </div>
      </form>

      <div id="fb-success-banner" class="alert-banner alert-info" style="display: none; margin-top: 1rem;">
        <i class="fas fa-check-circle" style="font-size: 1.2rem;"></i>
        <div id="fb-success-msg">
          <strong>Berhasil!</strong> Umpan balik Anda telah dikirim ke <strong>ryan86877@gmail.com</strong>.
        </div>
      </div>

      <div id="fb-error-banner" class="alert-banner alert-danger" style="display: none; margin-top: 1rem;">
        <i class="fas fa-exclamation-triangle" style="font-size: 1.2rem;"></i>
        <div id="fb-error-msg">
          <strong>Gagal mengirim:</strong> Silakan gunakan tombol "Kirim via Aplikasi Gmail".
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

async function handleDirectFeedbackSubmit(event) {
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

  // 2. Disable Button & Show Loading State
  if (btn) {
    btn.disabled = true;
    btn.innerHTML = `<i class="fas fa-spinner fa-spin"></i> Mengirim ke ryan86877@gmail.com...`;
  }

  hideBanners();

  // 3. Send to Web3Forms API
  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `[Umpan Balik Al-Mirats Web] Dari ${nama}`,
        from_name: "Web Kalkulator Al-Mirats",
        name: nama,
        email: email,
        rating: `${selectedRating} / 5 Bintang`,
        message: pesan,
        tanggal: new Date().toLocaleString("id-ID")
      })
    });

    const result = await response.json();

    if (result.success) {
      showBanner("fb-success-banner");
      document.getElementById("feedbackForm").reset();
      setRating(5);
    } else {
      console.error("Web3Forms error:", result);
      showBanner("fb-error-banner");
    }
  } catch (err) {
    console.error("Fetch submit error:", err);
    showBanner("fb-error-banner");
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `<i class="fas fa-paper-plane"></i> Kirim Umpan Balik`;
    }
  }
}

function showBanner(id) {
  hideBanners();
  const el = document.getElementById(id);
  if (el) {
    el.style.display = "flex";
    setTimeout(() => { el.style.display = "none"; }, 7000);
  }
}

function hideBanners() {
  const b1 = document.getElementById("fb-success-banner");
  const b2 = document.getElementById("fb-error-banner");
  if (b1) b1.style.display = "none";
  if (b2) b2.style.display = "none";
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
