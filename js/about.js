/**
 * ==========================================================================
 * Web Kalkulator Al-Mirats - About App Info Module
 * ==========================================================================
 */

function renderAboutContent() {
  const container = document.getElementById("about-container");
  if (!container) return;

  container.innerHTML = `
    <div class="card">
      <div style="text-align: center; margin-bottom: 2rem;">
        <div style="width: 80px; height: 80px; background: linear-gradient(135deg, var(--primary), var(--accent)); color: white; border-radius: 24px; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 1rem auto; box-shadow: var(--shadow-md);">
          <i class="fas fa-calculator"></i>
        </div>
        <h2 style="font-size: 1.8rem; margin-bottom: 0.25rem;">Kalkulator Al-Mirats</h2>
        <p style="color: var(--text-muted); font-size: 0.9rem;">Versi Web 1.0.0 (Ported dari Aplikasi Android AlmirathKalkulator)</p>
      </div>

      <div class="form-group" style="margin-bottom: 1.5rem;">
        <h4 style="color: var(--primary); margin-bottom: 0.5rem;"><i class="fas fa-info-circle"></i> Deskripsi Aplikasi</h4>
        <p style="line-height: 1.7;">
          Kalkulator Al-Mirats merupakan aplikasi perhitungan hukum waris Islam (Ilmu Faraidh) yang dibuat sesuai syariat dan ajaran Agama Islam. Aplikasi ini memudahkan masyarakat dalam menghitung pembagian harta warisan secara cepat, akurat, dan transparan, sekaligus menyediakan 8 modul materi edukasi waris Islam.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin-top: 1.5rem;">
        <div style="background: var(--primary-light); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--accent);">
          <h4 style="color: var(--primary); margin-bottom: 0.75rem;"><i class="fas fa-users"></i> Tim Pengembang (Android)</h4>
          <ul style="list-style: none; line-height: 1.8;">
            <li><strong>1. Arfan Prihardiansyah</strong><br><small>email: arfanprihard.info2@gmail.com</small></li>
            <li style="margin-top: 0.5rem;"><strong>2. Bayu Mahesa</strong><br><small>email: bayumhsa128@gmail.com</small></li>
            <li style="margin-top: 0.5rem;"><strong>3. Ryan Hidayat</strong><br><small>email: ryan86877@gmail.com</small></li>
          </ul>
        </div>

        <div style="background: var(--primary-light); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--accent);">
          <h4 style="color: var(--primary); margin-bottom: 0.75rem;"><i class="fas fa-user-graduate"></i> Dosen Pembimbing & Klien</h4>
          <p style="margin-bottom: 0.75rem;">
            <strong>Dosen Pembimbing:</strong><br>
            Herika Hayurani, S.Kom., M.Kom.<br>
            <small>email: herika.hayurani@gmail.com</small>
          </p>
          <p>
            <strong>Klien:</strong><br>
            Dr. H. Karimulloh, M.A.<br>
            <small>email: karimulloh@yarsi.ac.id</small>
          </p>
        </div>
      </div>

      <div style="margin-top: 1.5rem; padding-top: 1.25rem; border-top: 1px solid var(--border-color);">
        <h4 style="color: var(--primary); margin-bottom: 0.5rem;"><i class="fas fa-book-open"></i> Sumber Konten & Rujukan</h4>
        <ul style="margin-left: 1.5rem; line-height: 1.7; color: var(--text-muted);">
          <li>Kementerian Agama Republik Indonesia. 2022. <em>Al-Qur'an Digital</em>.</li>
          <li>Supardin. 2020. <em>Fikih Mawaris & Hukum Kewarisan (Studi Analisis Perbandingan)</em>. Sulawesi Selatan: Pusaka Almaida.</li>
        </ul>
      </div>
    </div>
  `;
}
