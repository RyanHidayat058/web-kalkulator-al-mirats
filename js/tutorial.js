/**
 * ==========================================================================
 * Web Kalkulator Al-Mirats - Tutorial & Guide Module
 * ==========================================================================
 */

const tutorialData = [
  {
    id: "tut-kalkulator",
    title: "Cara Menggunakan Kalkulator Waris",
    icon: "fa-calculator",
    steps: [
      "Buka menu <strong>Kalkulator</strong> di sidebar.",
      "<strong>Langkah 1 (Harta)</strong>: Masukkan Harta Kotor, Hutang, Biaya Perawatan Jenazah, dan Wasiat. Sistem akan memvalidasi agar Wasiat tidak melebihi 1/3 Harta Bersih.",
      "<strong>Langkah 2 (Jenis Kelamin)</strong>: Pilih Jenis Kelamin Pewaris yang meninggal dunia (Laki-Laki atau Perempuan).",
      "<strong>Langkah 3 (Ahli Waris)</strong>: Pilih keberadaan Ayah, Ibu, Suami/Istri, serta jumlah Anak Laki-Laki dan Anak Perempuan.",
      "<strong>Langkah 4 (Hasil Pembagian)</strong>: Sistem akan menghitung pembagian waris secara otomatis lengkap dengan rasio pecahan, nominal rupiah per orang, serta keterangan Radd / Aul / Ashabah."
    ]
  },
  {
    id: "tut-materi",
    title: "Mempelajari Hukum Waris Islam",
    icon: "fa-book-quran",
    steps: [
      "Buka menu <strong>Materi Edukasi</strong>.",
      "Pilih salah satu dari 8 Modul Materi yang tersedia.",
      "Materi dilengkapi dengan rujukan ayat Al-Qur'an (Surat An-Nisa), hadits, dan penjelasan hukum Faraidh dari para ulama fiqih.",
      "Gunakan fitur pencarian materi jika ingin membaca topik tertentu."
    ]
  },
  {
    id: "tut-pdf",
    title: "Mencetak & Menyimpan Hasil Pembagian",
    icon: "fa-file-pdf",
    steps: [
      "Setelah perhitungan di Langkah 4 selesai, Anda dapat menekan tombol <strong>Cetak / Simpan PDF</strong>.",
      "Sistem akan membuka dialog cetak browser yang rapi untuk diunduh sebagai dokumen PDF atau dicetak langsung ke printer."
    ]
  }
];

function renderTutorialContent() {
  const container = document.getElementById("tutorial-container");
  if (!container) return;

  container.innerHTML = tutorialData.map(tut => `
    <div class="card" style="margin-bottom: 1.25rem;">
      <h3 style="display: flex; align-items: center; gap: 0.6rem; margin-bottom: 1rem; color: var(--primary);">
        <i class="fas ${tut.icon}"></i> ${tut.title}
      </h3>
      <ol style="margin-left: 1.5rem; line-height: 1.8;">
        ${tut.steps.map(s => `<li style="margin-bottom: 0.5rem;">${s}</li>`).join('')}
      </ol>
    </div>
  `).join('');
}
