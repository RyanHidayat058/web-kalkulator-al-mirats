<div align="center">

# ☪️ Web Kalkulator Al-Mirats
### *Aplikasi Web Kalkulator Waris Islam & Faraidh Interactive*

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/License-MIT-green.style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-brightgreen.style=for-the-badge)

<p align="center">
  <b>Kalkulator Al-Mirats Web</b> adalah aplikasi web modern, responsif, dan interaktif untuk menghitung pembagian harta warisan sesuai dengan syariat Agama Islam dan ilmu Faraidh.
  <br>
  <i>Migrasi & Pengembangan Web dari repositori Android: <a href="https://github.com/arfanprihard/AlmirathKalkulator">AlmirathKalkulator</a></i>
</p>

</div>

---

## 📌 Tentang Proyek

**Kalkulator Al-Mirats** dirancang untuk memudahkan masyarakat, pelajar, maupun praktisi hukum Islam dalam menghitung pembagian harta waris secara cepat, akurat, dan transparan. Selain fitur kalkulator 4-langkah, aplikasi web ini juga dilengkapi **8 Modul Materi Edukasi Faraidh** beserta dalil Al-Qur'an (Teks Arab & Terjemahan Bahasa Indonesia).

Aplikasi ini merupakan bentuk transformasi dan migrasi dari aplikasi Android *Kalkulator Al-Mirats* ke dalam platform **Web App Single Page Application (SPA)** yang tidak memerlukan instalasi aplikasi dan dapat diakses langsung melalui browser smartphone, tablet, maupun laptop.

---

## ✨ Fitur Utama

- 🧮 **Kalkulator Waris 4-Langkah (Wizard Flow)**:
  1. **Input Harta & Beban**: Harta Kotor, Hutang (-), Biaya Perawatan Jenazah (-), dan Wasiat (-) dengan validasi otomatis agar wasiat tidak melebihi 1/3 Harta Bersih setelah dikurang hutang.
  2. **Pilihan Jenis Kelamin Pewaris**: Laki-Laki atau Perempuan.
  3. **Pilihan Ahli Waris**: Ayah, Ibu, Suami/Istri (hingga 4 istri), Anak Laki-Laki, dan Anak Perempuan.
  4. **Hasil Pembagian Waris & Tabel Rincian**: Tabel interaktif yang menampilkan bagian porsi Faraidh, rasio pecahan, jumlah orang, total hak harta (Rp), nominal per orang (Rp), serta keterangan kasus khusus.
- ⚖️ **Mendukung Kasus Khusus Faraidh**:
  - **Radd**: Pengembalian sisa harta secara proporsional kepada para ahli waris jika total bagian $< 1$.
  - **Aul**: Penyesuaian porsi pembilang ketika total bagian ahli waris melebihi 1 ($> 1$).
  - **Ashabah & Ashabah-Bil-Ghoir**: Pembagian sisa harta untuk anak laki-laki dan anak perempuan (rasio 2:1).
  - **Baitul Mal**: Penampungan sisa harta bila tidak ada keluarga utama atau hanya ada pasangan.
- 📚 **8 Modul Materi Edukasi Waris (Mawaris & Faraidh)**:
  - Modul 1: Pengertian & Hukum Waris
  - Modul 2: Ayat-Ayat Al-Qur'an tentang Waris (Surat An-Nisā': 7, 11, 12, 176)
  - Modul 3: Daftar Ahli Waris yang Berhak Mengambil Warisan (15 Laki-laki & 10 Perempuan)
  - Modul 4: Bagan Struktur Ahli Waris Utama
  - Modul 5: Hijab & Mahjub (Penghalangan Waris)
  - Modul 6: Konsep Aul dalam Faraidh
  - Modul 7: Konsep Radd dalam Faraidh
  - Modul 8: Kadar Porsi Bagian Ahli Waris Utama
- 🖨️ **Fitur Cetak / Export PDF**: Pengguna dapat mencetak atau mengunduh laporan ringkasan pembagian waris secara langsung dalam format PDF.
- 🌙 **Tema Terang & Gelap (Light / Dark Mode)**: Tampilan visual modern dengan HSL color palette, Glassmorphism, dan switch tema instan.
- 💾 **Penyimpanan Lokal (LocalStorage)**: Menyimpan input kalkulasi terakhir dan data umpan balik secara otomatis di browser.
- 📱 **Desain Fully Responsive**: Tampilan optimal untuk perangkat Mobile, Tablet, dan Desktop.

---

## 🛠️ Teknologi yang Digunakan

- **HTML5**: Struktur semantik Web App & Modal Dialog.
- **Vanilla CSS3**: Design system kustom dengan CSS Variables, HSL Palette, Glassmorphism, & Animation.
- **JavaScript (ES6+)**: Engine kalkulasi Faraidh, state management, router tab, & LocalStorage.
- **Google Fonts**: *Inter*, *Outfit*, dan *Amiri* (Teks Arab Al-Qur'an).
- **FontAwesome 6**: Ikonografi UI modern.

---

## 📁 Struktur Direktori

```text
web-kalkulator-al-mirats/
├── index.html            # Halaman Utama SPA & Markup Layout
├── styles.css            # Custom CSS Design System & Responsive Styles
├── js/
│   ├── app.js            # Main Controller, Navigation & State Persistence
│   ├── calculator.js     # Engine Perhitungan Faraidh (Radd, Aul, Ashabah, Rp Formatter)
│   ├── materi.js         # Renderer & Data 8 Modul Materi Edukasi Waris
│   ├── tutorial.js       # Panduan Penggunaan Aplikasi
│   ├── about.js          # Informasi Proyek, Pengembang & Rujukan
│   ├── feedback.js       # Form Umpan Balik & Star Rating
│   └── pdf.js            # Utility Cetak & Export PDF
├── .gitignore            # Exclude Files untuk Git Repository
└── README.md             # Dokumentasi Resmi Proyek
```

---

## 🚀 Cara Menjalankan Proyek

Aplikasi web ini murni berbasis **Client-Side (Static Web App)** tanpa membutuhkan setup backend server atau database khusus.

### Menjalankan di Lokal:
1. **Clone Repositori**:
   ```bash
   git clone https://github.com/RyanHidayat058/web-kalkulator-al-mirats.git
   cd web-kalkulator-al-mirats
   ```

2. **Buka di Browser**:
   - Cukup klik ganda file `index.html` untuk membuka di browser favorit Anda.
   - Atau gunakan HTTP Server sederhana:
     ```bash
     # Menggunakan Python:
     python -m http.server 8080

     # Menggunakan Node.js / npx:
     npx serve .
     ```
   - Akses via browser di: `http://localhost:8080`

---

## 👥 Kredit & Tim Pengembang

Aplikasi Web ini dikembangkan berdasarkan proyek aplikasi Android **AlmirathKalkulator** oleh tim pengembang:

### 📱 Tim Pengembang Proyek Asli (Android):
1. **Arfan Prihardiansyah** (`arfanprihard.info2@gmail.com`) - [GitHub @arfanprihard](https://github.com/arfanprihard)
2. **Bayu Mahesa** (`bayumhsa128@gmail.com`)
3. **Ryan Hidayat** (`ryan86877@gmail.com`) - [GitHub @RyanHidayat058](https://github.com/RyanHidayat058)

### 🎓 Dosen Pembimbing:
- **Herika Hayurani, S.Kom., M.Kom.** (`herika.hayurani@gmail.com`)

### ☪️ Klien & Konsultan Ahli:
- **Dr. H. Karimulloh, M.A.** (`karimulloh@yarsi.ac.id`)

### 📖 Sumber Rujukan Pustaka:
- Kementerian Agama Republik Indonesia. 2022. *Al-Qur'an Digital*.
- Supardin. 2020. *Fikih Mawaris & Hukum Kewarisan (Studi Analisis Perbandingan)*. Sulawesi Selatan: Pusaka Almaida.

---

## 📄 Lisensi

Proyek ini dilisensikan di bawah **[MIT License](LICENSE)**. Bebas digunakan untuk keperluan edukasi, nirlaba, dan pengembangan lebih lanjut.
