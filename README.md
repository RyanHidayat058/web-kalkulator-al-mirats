<div align="center">

  # 🕌 Al-Mirats Web
  ### Kalkulator Waris Islam & Modul Edukasi Faraidh Interaktif

  <p align="center">
    Aplikasi Web modern, responsif, dan presisi untuk menghitung pembagian harta warisan secara adil dan akurat berdasarkan syariat Agama Islam & Faraidh.
  </p>

  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
  [![License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

</div>

---

## 📖 Tentang Aplikasi

**Al-Mirats Web** merupakan aplikasi perhitungan hukum waris Islam (Ilmu Faraidh) berbasis web yang dimigrasikan dan dikembangkan dari versi Android [AlmirathKalkulator](https://github.com/arfanprihard/AlmirathKalkulator). 

Aplikasi ini dirancang untuk memudahkan masyarakat, akademisi, dan praktisi hukum Islam dalam menghitung bagian harta warisan masing-masing ahli waris secara transparan, akurat, dan dilengkapi dengan materi edukasi Faraidh yang bersumber langsung dari Al-Qur'an dan Sunnah.

---

## ✨ Fitur-Fitur Utama

### 🧮 1. Kalkulator Waris Interaktif 4-Langkah (Wizard)
- **Langkah 1 (Harta & Beban)**: Input Harta Kotor, Hutang, Biaya Perawatan Jenazah (*Tajhiz Janazah*), dan Wasiat. Dilengkapi validasi otomatis agar Wasiat tidak melebihi **1/3** dari Harta Bersih setelah dikurangi hutang.
- **Langkah 2 (Jenis Kelamin Pewaris)**: Pemilihan jenis kelamin almarhum/ah (*Laki-Laki* atau *Perempuan*).
- **Langkah 3 (Pilih Ahli Waris)**: Penentuan ahli waris utama yang masih hidup (Ayah, Ibu, Suami/Istri 1-4, Anak Laki-Laki, dan Anak Perempuan).
- **Langkah 4 (Hasil Pembagian & Breakdown)**: Rincian porsi Faraidh (`1/2`, `1/3`, `1/4`, `1/6`, `1/8`, `2/3`, `Ashabah`), nominal Rupiah per orang, serta penyesuaian khusus **Aul** dan **Radd**.

### 🖨️ 2. Cetak Laporan & Export PDF
- Pencetakan rincian hasil pembagian waris secara terstruktur dan rapi ke format **PDF / Printer**.

### 🌙 3. Tema Terang & Gelap (Light / Dark Mode)
- Antarmuka visual berbasis **Glassmorphism UI** yang modern, bersih, dan mendukung beralih tema terang/gelap untuk kenyamanan membaca.

### 📚 4. 8 Modul Materi Edukasi Faraidh
- Memuat 8 modul pembelajaran waris lengkap dengan teks Al-Qur'an Surat An-Nisa (Ayat 7, 11, 12, dan 176) dalam **Bahasa Arab & Terjemahan Bahasa Indonesia**, aturan *Hijab/Mahjub*, *Aul*, *Radd*, dan porsi masing-masing ahli waris.

### 💾 5. Penyimpanan Data Lokal (LocalStorage)
- Otomatis menyimpan riwayat input kalkulasi terakhir dan form umpan balik di browser tanpa membutuhkan database server eksternal.

---

## 🛠️ Teknologi yang Digunakan

- **Frontend Core**: HTML5 (Semantic Structure) & ES6 Modern Modular JavaScript.
- **Styling**: Custom CSS3 Design System (HSL Color Palette, CSS Variables, Responsive Flexbox & CSS Grid, Animations).
- **Typography & Icons**:
  - [Inter](https://fonts.google.com/specimen/Inter) & [Outfit](https://fonts.google.com/specimen/Outfit) (Google Fonts)
  - [Amiri](https://fonts.google.com/specimen/Amiri) (Teks Arab Al-Qur'an)
  - [Font Awesome 6](https://fontawesome.com/) (Iconography)

---

## 🚀 Cara Menjalankan Aplikasi

1. **Clone Repositori**:
   ```bash
   git clone https://github.com/arfanprihard/al-mirats-web.git
   cd al-mirats-web
   ```

2. **Jalankan Aplikasi**:
   - Cukup buka file `index.html` pada browser favorit Anda (Google Chrome, Firefox, Edge, Safari).
   - Atau gunakan HTTP Server lokal:
     ```bash
     # Menggunakan Python
     python -m http.server 8080

     # Atau menggunakan Node.js serve
     npx serve .
     ```
   - Akses melalui `http://localhost:8080`.

---

## 📚 Sumber Konten & Rujukan Syariat

1. **Kementerian Agama Republik Indonesia**. (2022). *Al-Qur'an Digital*.
2. **Supardin**. (2020). *Fikih Mawaris & Hukum Kewarisan (Studi Analisis Perbandingan)*. Sulawesi Selatan: Pusaka Almaida.

---

## 👥 Tim Pengembang

- **Arfan Prihardiansyah** - *Developer* (email: arfanprihard.info2@gmail.com)
- **Bayu Mahesa** - *Developer* (email: bayumhsa128@gmail.com)
- **Ryan Hidayat** - *Developer* (email: ryan86877@gmail.com)

**Dosen Pembimbing**: Herika Hayurani, S.Kom., M.Kom.  
**Klien**: Dr. H. Karimulloh, M.A.

---

## 📄 Lisensi

Proyek ini dilindungi di bawah lisensi **MIT License**.

<div align="center">
  <sub>Dibuat dengan ❤️ untuk kemudahan Umat Islam dalam mempelajari dan mengamalkan ilmu Faraidh.</sub>
</div>
