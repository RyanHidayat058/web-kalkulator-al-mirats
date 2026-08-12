/**
 * ==========================================================================
 * Web Kalkulator Al-Mirats - Educational Modules Data & Renderer (Materi 1-8)
 * ==========================================================================
 */

const materiData = [
  {
    id: "materi1",
    number: 1,
    title: "Pengertian Waris (Mawaris & Faraidh)",
    desc: "Definisi, makna harfiah, dan istilah ilmu waris menurut ulama Fiqih Islam.",
    content: `
      <h3>Apakah yang dimaksud dengan waris?</h3>
      <p><strong>'Mawaris'</strong> dalam buku <em>Fiqh Mawaris</em> oleh Hasanudin, merupakan bentuk jamak dari kata 'mirats', artinya harta yang ditinggalkan oleh orang yang meninggal dunia.</p>
      <p>Muhammad Ali Ash-Shabuni dalam buku <em>Pembagian Waris Menurut Islam</em> menyebutkan, kata 'mirats', berarti berpindahnya sesuatu dari seseorang kepada orang lain atau dari suatu kaum kepada kaum lain.</p>
      <p>Para ulama mendefinisikan <strong>'mirats'</strong>, yaitu berpindahnya hak kepemilikan dari orang yang meninggal kepada ahli warisnya yang masih hidup, baik yang ditinggalkan itu berupa harta (uang), tanah, atau apa saja yang berupa hak milik legal secara syariat.</p>
      <p>Mawaris menurut istilah adalah pengetahuan yang berkaitan dengan harta warisan dan perhitungan untuk mengetahui kadar harta yang wajib diberikan kepada tiap orang yang berhak.</p>
      <p>Di sisi lain, ilmu mawaris disebut pula dengan <strong>'faraidh'</strong>, artinya bagian tertentu atau ketentuan. Jadi bisa dikatakan bahwa mawaris dan faraidh merupakan ilmu yang mempelajari kewarisan dalam Islam.</p>
    `
  },
  {
    id: "materi2",
    number: 2,
    title: "Ayat-Ayat Al-Qur'an tentang Waris",
    desc: "Dalil utama pembagian waris dari Surat An-Nisa (Ayat 7, 11, 12, dan 176).",
    content: `
      <h3>Apa saja ayat-ayat yang menjelaskan tentang waris?</h3>
      
      <h4>An-Nisā' [4] : 7</h4>
      <div class="arabic-text">
        لِلرِّجَالِ نَصِيْبٌ مِّمَّا تَرَكَ الْوَالِدٰنِ وَالْاَقْرَبُوْنَۖ وَلِلنِّسَاۤءِ نَصِيْبٌ مِّمَّا تَرَكَ الْوَالِدٰنِ وَالْاَقْرَبُوْنَ مِمَّا قَلَّ مِنْهُ اَوْ كَثُرَ ۗ نَصِيْبًا مَّفْرُوْضًا
      </div>
      <p class="translation"><em>"Bagi laki-laki ada hak bagian dari harta peninggalan kedua orang tua dan kerabatnya dan bagi perempuan ada hak bagian (pula) dari harta peninggalan kedua orang tua dan kerabatnya, baik sedikit maupun banyak, menurut bagian yang telah ditetapkan."</em></p>
      <hr style="margin: 1.5rem 0; border: 0; border-top: 1px solid var(--border-color);">

      <h4>An-Nisā' [4] : 11</h4>
      <div class="arabic-text">
        يُوْصِيْكُمُ اللّٰهُ فِيْٓ اَوْلَادِكُمْ لِلذَّكَرِ مِثْلُ حَظِّ الْاُنْثَيَيْنِ ۚ فَاِنْ كُنَّ نِسَاۤءً فَوْقَ اثْنَتَيْنِ فَلَهُنَّ ثُلُثَا مَا تَرَكَ ۚ وَاِنْ كَانَتْ وَاحِدَةً فَلَهَا النِّصْفُ ۗ وَلِاَبَوَيْهِ لِكُلِّ وَاحِدٍ مِّنْهُمَا السُّدُسُ مِمَّا تَرَكَ اِنْ كَانَ لَهٗ وَلَدٌ ۚ فَاِنْ لَّمْ يَكُنْ لَّهٗ وَلَدٌ وَّوَرِثَهٗٓ اَبَوٰهُ فَلِاُمِّهِ الثُّلُثُ ۚ فَاِنْ كَانَ لَهٗٓ اِخْوَةٌ فَلِاُمِّهِ السُّدُسُ مِنْۢ بَعْدِ وَصِيَّةٍ يُّوْصِيْ بِهَآ اَوْ دَيْنٍ ۗ اٰبَاۤؤُكُمْ وَاَبْنَاۤؤُكُمْۚ  لَا تَدْرُوْنَ اَيُّهُمْ اَقْرَبُ لَكُمْ نَفْعًا ۗ فَرِيْضَةً مِّنَ اللّٰهِ ۗ اِنَّ اللّٰهَ كَانَ عَلِيْمًا حَكِيْمًا
      </div>
      <p class="translation"><em>"Allah mensyariatkan (mewajibkan) kepadamu tentang (pembagian warisan untuk) anak-anakmu, (yaitu) bagian seorang anak laki-laki sama dengan bagian dua orang anak perempuan. Jika anak itu semuanya perempuan yang jumlahnya lebih dari dua, bagian mereka dua pertiga dari harta yang ditinggalkan. Jika dia (anak perempuan) itu seorang saja, dia memperoleh setengah (harta yang ditinggalkan). Untuk kedua orang tua, bagian masing-masing seperenam dari harta yang ditinggalkan, jika dia (yang meninggal) mempunyai anak. Jika dia (yang meninggal) tidak mempunyai anak dan dia diwarisi oleh kedua orang tuanya (saja), ibunya mendapat sepertiga. Jika dia (yang meninggal) mempunyai beberapa saudara, ibunya mendapat seperenam. (Warisan tersebut dibagi) setelah (dipenuhi) wasiat yang dibuatnya atau (dan dilunasi) utangnya. (Tentang) orang tuamu dan anak-anakmu, kamu tidak mengetahui siapa di antara mereka yang lebih banyak manfaatnya bagimu. Ini adalah ketetapan Allah. Sesungguhnya Allah adalah Maha Mengetahui lagi Maha Bijaksana."</em></p>
      <hr style="margin: 1.5rem 0; border: 0; border-top: 1px solid var(--border-color);">

      <h4>An-Nisā' [4] : 12</h4>
      <div class="arabic-text">
        ۞ وَلَكُمْ نِصْفُ مَا تَرَكَ اَزْوَاجُكُمْ اِنْ لَّمْ يَكُنْ لَّهُنَّ وَلَدٌ ۚ فَاِنْ كَانَ لَهُنَّ وَلَدٌ فَلَكُمُ الرُّبُعُ مِمَّا تَرَكْنَ مِنْۢ بَعْدِ وَصِيَّةٍ يُّوْصِيْنَ بِهَآ اَوْ دَيْنٍ ۗ وَلَهُنَّ الرُّبُعُ مِمَّا تَرَكْتُمْ اِنْ لَّمْ يَكُنْ لَّكُمْ وَلَدٌ ۚ فَاِنْ كَانَ لَكُمْ وَلَدٌ فَلَهُنَّ الثُّمُنُ مِمَّا تَرَكْتُمْ مِّنْۢ بَعْدِ وَصِيَّةٍ تُوْصُوْنَ بِهَآ اَوْ دَيْنٍ ۗ وَاِنْ كَانَ رَجُلٌ يُّوْرَثُ كَلٰلَةً اَوِ امْرَاَةٌ وَّلَهٗٓ اَخٌ اَوْ اُخْتٌ فَلِكُلِّ وَاحِدٍ مِّنْهُمَا السُّدُسُۚ  فَاِنْ كَانُوْٓا اَكْثَرَ مِنْ ذٰلِكَ فَهُمْ شُرَكَاۤءُ فِى الثُّلُثِ مِنْۢ بَعْدِ وَصِيَّةٍ يُّوْصٰى بِهَآ اَوْ دَيْنٍۙ غَيْرَ مُضَاۤرٍّ ۚ وَصِيَّةً مِّنَ اللّٰهِ ۗ وَاللّٰهُ عَلِيْمٌ حَلِيْمٌۗ
      </div>
      <p class="translation"><em>"Bagimu (para suami) seperdua dari harta yang ditinggalkan oleh istri-istrimu, jika mereka tidak mempunyai anak. Jika mereka (istri-istrimu) itu mempunyai anak, kamu mendapat seperempat dari harta yang ditinggalkannya setelah (dipenuhi) wasiat yang mereka buat atau (dan setelah dibayar) utangnya. Bagi mereka (para istri) seperempat harta yang kamu tinggalkan jika kamu tidak mempunyai anak. Jika kamu mempunyai anak, bagi mereka (para istri) seperdelapan dari harta yang kamu tinggalkan (setelah dipenuhi) wasiat yang kamu buat atau (dan setelah dibayar) utang-utangmu..."</em></p>
      <hr style="margin: 1.5rem 0; border: 0; border-top: 1px solid var(--border-color);">

      <h4>An-Nisā' [4] : 176</h4>
      <div class="arabic-text">
        يَسْتَفْتُوْنَكَۗ قُلِ اللّٰهُ يُفْتِيْكُمْ فِى الْكَلٰلَةِ ۗاِنِ امْرُؤٌا هَلَكَ لَيْسَ لَهٗ وَلَدٌ وَّلَهٗٓ اُخْتٌ فَلَهَا نِصْفُ مَا تَرَكَۚ وَهُوَ يَرِثُهَآ اِنْ لَّمْ يَكُنْ لَّهَا وَلَدٌ ۚ فَاِنْ كَانَتَا اثْنَتَيْنِ فَلَهُمَا الثُّلُثٰنِ مِمَّا تَرَكَ ۗوَاِنْ كَانُوْٓا اِخْوَةً رِّجَالًا وَّنِسَاۤءً فَلِلذَّكَرِ مِثْلُ حَظِّ الْاُنْثَيَيْنِۗ يُبَيِّنُ اللّٰهُ لَكُمْ اَنْ تَضِلُّوْا ۗ وَاللّٰهُ بِكُلِّ شَيْءٍ عَلِيْمٌ ࣖ
      </div>
      <p class="translation"><em>"Mereka meminta fatwa kepadamu (tentang kalālah). Katakanlah, “Allah memberi fatwa kepadamu tentang kalālah, (yaitu) jika seseorang meninggal dan dia tidak mempunyai anak, tetapi mempunyai seorang saudara perempuan, bagiannya (saudara perempuannya itu) seperdua dari harta yang ditinggalkannya..."</em></p>
    `
  },
  {
    id: "materi3",
    number: 3,
    title: "Daftar Ahli Waris yang Berhak Mengambil Warisan",
    desc: "Rincian 15 Golongan Laki-Laki & 10 Golongan Perempuan.",
    content: `
      <h3>Siapa saja yang berhak mendapatkan waris?</h3>
      <h4>1. Ahli Waris Laki-Laki (15 Golongan):</h4>
      <ol style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
        <li>Anak Laki-laki</li>
        <li>Cucu Laki-laki dari anak laki-laki dan seterusnya ke bawah</li>
        <li>Bapak (Ayah)</li>
        <li>Kakek dari pihak ayah dan terus ke atas</li>
        <li>Saudara laki-laki sekandung (ayah dan ibu)</li>
        <li>Saudara laki-laki seayah</li>
        <li>Saudara laki-laki seibu</li>
        <li>Anak laki-laki dari saudara laki-laki sekandung</li>
        <li>Anak laki-laki dari saudara laki-laki sebapak</li>
        <li>Paman dari bapak sekandung</li>
        <li>Paman dari bapak sebapak</li>
        <li>Anak laki-laki dari paman sekandung</li>
        <li>Anak laki-laki dari paman sebapak</li>
        <li>Suami</li>
        <li>Laki-laki yang memerdekakan budak (Mu'tiq)</li>
      </ol>

      <h4>2. Ahli Waris Perempuan (10 Golongan):</h4>
      <ol style="margin-left: 1.5rem;">
        <li>Anak Perempuan</li>
        <li>Cucu perempuan dari anak laki-laki</li>
        <li>Ibu</li>
        <li>Nenek dari pihak ibu</li>
        <li>Nenek dari pihak bapak</li>
        <li>Saudara perempuan sekandung</li>
        <li>Saudara perempuan sebapak</li>
        <li>Saudara perempuan seibu</li>
        <li>Istri</li>
        <li>Wanita yang memerdekakan budak (Mu'tiqah)</li>
      </ol>
    `
  },
  {
    id: "materi4",
    number: 4,
    title: "Struktur Ahli Waris Utama",
    desc: "Bagan hierarki hubungan keluarga dalam waris utama (Ayah, Ibu, Suami/Istri, Anak Laki, Anak Perempuan).",
    content: `
      <h3>Bagaimana struktur pada waris utama?</h3>
      <p>Berikut struktur pada waris utama yang diprioritaskan dalam kalkulator ini:</p>
      <div style="background: var(--primary-light); padding: 1.5rem; border-radius: var(--radius-md); text-align: center; margin: 1rem 0;">
        <div style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap;">
          <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); border: 1px solid var(--primary);">
            <strong>Kakek / Nenek</strong><br><small>(Jalur Atas)</small>
          </div>
        </div>
        <div style="font-size: 1.5rem; color: var(--primary); margin: 0.5rem 0;">↓</div>
        <div style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap;">
          <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); border: 2px solid var(--primary);">
            <strong>Ayah & Ibu</strong><br><small>(Orang Tua)</small>
          </div>
          <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); border: 2px solid var(--accent);">
            <strong>Suami / Istri</strong><br><small>(Pasangan)</small>
          </div>
        </div>
        <div style="font-size: 1.5rem; color: var(--primary); margin: 0.5rem 0;">↓</div>
        <div style="background: var(--primary); color: #fff; padding: 1rem; border-radius: var(--radius-md); max-width: 250px; margin: 0 auto;">
          <strong>PEWARIS</strong><br><small>(Al-Mayyit)</small>
        </div>
        <div style="font-size: 1.5rem; color: var(--primary); margin: 0.5rem 0;">↓</div>
        <div style="display: flex; justify-content: center; gap: 2rem; flex-wrap: wrap;">
          <div style="background: var(--bg-card); padding: 1rem; border-radius: var(--radius-md); border: 2px solid var(--primary);">
            <strong>Anak Laki-Laki & Anak Perempuan</strong><br><small>(Anak Kandung / Jalur Bawah)</small>
          </div>
        </div>
      </div>
    `
  },
  {
    id: "materi5",
    number: 5,
    title: "Hijab & Mahjub (Penghalangan Waris)",
    desc: "Siapa saja yang terhalang (gugur hak warisnya) oleh keberadaan ahli waris utama.",
    content: `
      <h3>Siapa saja yang terhalang oleh ahli waris utama?</h3>
      <h4>1. Anak Laki-Laki menghalangi waris dari:</h4>
      <ul>
        <li>Cucu Laki-laki & Cucu Perempuan</li>
        <li>Saudara Kandung (Laki-laki & Perempuan)</li>
        <li>Saudara Seayah (Laki-laki & Perempuan)</li>
        <li>Saudara Seibu (Laki-laki & Perempuan)</li>
        <li>Keponakan (Anak dari Saudara Kandung / Seayah)</li>
        <li>Paman Kandung & Paman Sekakek</li>
        <li>Anak Laki-laki dari Paman</li>
      </ul>

      <h4>2. Anak Perempuan menghalangi waris dari:</h4>
      <ul>
        <li>Cucu Perempuan (apabila terdapat 2 atau lebih Anak Perempuan)</li>
        <li>Saudara Seibu (Laki-laki & Perempuan)</li>
      </ul>

      <h4>3. Ayah menghalangi waris dari:</h4>
      <ul>
        <li>Kakek & Nenek dari Ayah</li>
        <li>Seluruh Saudara (Kandung, Seayah, Seibu)</li>
        <li>Keponakan, Paman, dan Sepupu</li>
      </ul>

      <h4>4. Ibu menghalangi waris dari:</h4>
      <ul>
        <li>Nenek dari pihak Ayah</li>
        <li>Nenek dari pihak Ibu</li>
      </ul>

      <h4>5. Suami atau Istri:</h4>
      <p><strong>Tidak pernah terhalang</strong> oleh siapapun dan tidak menghalangi ahli waris manapun.</p>
    `
  },
  {
    id: "materi6",
    number: 6,
    title: "Konsep Aul dalam Waris",
    desc: "Penyesuaian proporsional ketika jumlah pembilang lebih besar dari penyebut.",
    content: `
      <h3>Apa itu Aul dalam waris?</h3>
      <p><strong>Aul</strong> menurut bahasa berarti menaikkan atau meninggikan. Secara istilah Faraidh, Aul adalah terjadinya kelebihan jumlah bagian (saham) para ahli waris dibandingkan dengan asal masalah (penyebut).</p>
      <p>Hal ini terjadi ketika harta yang ditinggalkan tidak mencukupi untuk memenuhi semua bagian <em>Zawil Furud</em>. Solusinya, asal masalah (penyebut) dinaikkan sesuai total pembilang, sehingga setiap ahli waris mengalami pengurangan bagian secara adil dan seimbang.</p>
    `
  },
  {
    id: "materi7",
    number: 7,
    title: "Konsep Radd dalam Waris",
    desc: "Pengembalian sisa harta kepada ahli waris bila total bagian lebih kecil dari 1.",
    content: `
      <h3>Apa itu Radd dalam waris?</h3>
      <p><strong>Ar-Radd</strong> secara bahasa bermakna kembali. Secara istilah Faraidh, Radd adalah berkurangnya asal masalah dan bertambahnya jumlah bagian para <em>Ashabul Furudh</em>.</p>
      <p>Radd terjadi ketika seluruh sisa harta yang dibagikan kepada ahli waris yang berhak masih menyisa, namun tidak ada ahli waris <em>Ashabah</em> yang mengambil sisa tersebut. Sisa harta dikembalikan/dibagikan kembali secara proporsional kepada para ahli waris yang berhak (seperti Ibu, Anak Perempuan).</p>
    `
  },
  {
    id: "materi8",
    number: 8,
    title: "Kadar Bagian Ahli Waris Utama",
    desc: "Porsi ketetapan untuk Anak Laki-Laki, Anak Perempuan, Suami, Istri, Ayah, dan Ibu.",
    content: `
      <h3>Berapa bagian ahli waris utama?</h3>

      <h4>1. Anak Laki-Laki:</h4>
      <ul>
        <li>Selamanya menjadi <strong>Ashobah</strong> (penerima sisa harta).</li>
        <li>Kaidah Ashobah: Bagian 1 anak laki-laki = 2 bagian anak perempuan.</li>
      </ul>

      <h4>2. Anak Perempuan:</h4>
      <ul>
        <li><strong>Ashobah Bil Ghoir</strong> jika bersama anak laki-laki.</li>
        <li><strong>1/2 (Setengah)</strong> jika seorang diri & tanpa anak laki-laki.</li>
        <li><strong>2/3 (Dua Pertiga)</strong> jika 2 orang atau lebih & tanpa anak laki-laki.</li>
      </ul>

      <h4>3. Suami:</h4>
      <ul>
        <li><strong>1/2 (Setengah)</strong> jika almarhumah istri tidak meninggalkan anak/cucu.</li>
        <li><strong>1/4 (Seperempat)</strong> jika almarhumah istri meninggalkan anak/cucu.</li>
      </ul>

      <h4>4. Istri:</h4>
      <ul>
        <li><strong>1/4 (Seperempat)</strong> jika almarhum suami tidak meninggalkan anak/cucu.</li>
        <li><strong>1/8 (Seperdelapan)</strong> jika almarhum suami meninggalkan anak/cucu.</li>
      </ul>

      <h4>5. Ayah:</h4>
      <ul>
        <li><strong>Ashobah (Sisa)</strong> jika tidak ada anak/cucu.</li>
        <li><strong>1/6 + Ashobah</strong> jika bersama anak perempuan/cucu perempuan.</li>
        <li><strong>1/6 (Seperenam)</strong> jika bersama anak laki-laki/cucu laki-laki.</li>
      </ul>

      <h4>6. Ibu:</h4>
      <ul>
        <li><strong>1/3 (Sepertiga)</strong> jika tidak ada anak/cucu atau 2/lebih saudara.</li>
        <li><strong>1/6 (Seperenam)</strong> jika ada anak/cucu atau 2/lebih saudara.</li>
        <li><strong>1/3 Sisa (Umariyyatan)</strong> jika ahli waris hanya ayah, ibu, dan suami/istri.</li>
      </ul>
    `
  }
];

function renderMateriGrid() {
  const container = document.getElementById("materi-grid-container");
  if (!container) return;

  container.innerHTML = materiData.map(m => `
    <div class="materi-card" onclick="openMateriModal('${m.id}')">
      <div>
        <div class="materi-number">${m.number}</div>
        <h4 class="materi-title">${m.title}</h4>
        <p class="materi-desc">${m.desc}</p>
      </div>
      <div style="margin-top: 1rem; font-weight: 700; color: var(--primary); font-size: 0.85rem; display: flex; align-items: center; gap: 0.3rem;">
        Baca Selengkapnya <i class="fas fa-arrow-right"></i>
      </div>
    </div>
  `).join('');
}

function openMateriModal(materiId) {
  const m = materiData.find(item => item.id === materiId);
  if (!m) return;

  document.getElementById("modal-title").innerText = `Materi ${m.number}: ${m.title}`;
  document.getElementById("modal-body-content").innerHTML = m.content;

  const backdrop = document.getElementById("materi-modal");
  if (backdrop) {
    backdrop.classList.add("open");
  }
}

function closeMateriModal() {
  const backdrop = document.getElementById("materi-modal");
  if (backdrop) {
    backdrop.classList.remove("open");
  }
}
