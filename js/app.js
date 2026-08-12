/**
 * ==========================================================================
 * Web Kalkulator Al-Mirats - Main Application Controller
 * ==========================================================================
 */

// Application State
const appState = {
  currentTab: 'kalkulator',
  wizardStep: 1,
  calculatorData: {
    harta: 0,
    hutang: 0,
    biayaPerawatanJenazah: 0,
    wasiat: 0,
    jenisKelaminPewaris: 'Laki-Laki',
    adaAyah: false,
    adaIbu: false,
    adaSuami: false,
    istri: 0,
    anakLaki: 0,
    anakPerempuan: 0
  },
  lastResults: null,
  theme: 'light'
};

// Initialize App on DOM Loaded
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadSavedState();
  initNavigation();
  initCalculatorWizard();
  renderMateriGrid();
  renderTutorialContent();
  renderAboutContent();
  initFeedbackForm();
});

/* ==========================================================================
   Theme Management
   ========================================================================== */
function initTheme() {
  const savedTheme = localStorage.getItem("almirats_theme") || "light";
  setTheme(savedTheme);
}

function toggleTheme() {
  const newTheme = appState.theme === "light" ? "dark" : "light";
  setTheme(newTheme);
}

function setTheme(theme) {
  appState.theme = theme;
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("almirats_theme", theme);

  const icon = document.getElementById("theme-icon");
  if (icon) {
    icon.className = theme === "dark" ? "fas fa-sun" : "fas fa-moon";
  }
}

/* ==========================================================================
   Navigation Management
   ========================================================================== */
function initNavigation() {
  const navItems = document.querySelectorAll(".nav-item");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      const tabId = item.getAttribute("data-tab");
      switchTab(tabId);
    });
  });
}

function switchTab(tabId) {
  appState.currentTab = tabId;

  // Update Nav items UI
  document.querySelectorAll(".nav-item").forEach(item => {
    if (item.getAttribute("data-tab") === tabId) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });

  // Update Tab panes UI
  document.querySelectorAll(".tab-pane").forEach(pane => {
    if (pane.id === `tab-${tabId}`) {
      pane.classList.add("active");
    } else {
      pane.classList.remove("active");
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ==========================================================================
   Calculator Wizard Controller
   ========================================================================== */
function initCalculatorWizard() {
  // Input live currency text formatters
  const inputs = ['harta', 'hutang', 'biayaPerawatanJenazah', 'wasiat'];
  inputs.forEach(id => {
    const inputEl = document.getElementById(`input-${id}`);
    const previewEl = document.getElementById(`preview-${id}`);

    if (inputEl) {
      inputEl.addEventListener("input", (e) => {
        const val = Number(e.target.value) || 0;
        appState.calculatorData[id] = val;
        if (previewEl) {
          previewEl.innerText = AlMiratsCalculator.formatRupiah(val);
        }
        validateStep1();
        saveCalculatorState();
      });
    }
  });

  // Gender selection cards
  const maleCard = document.getElementById("gender-male");
  const femaleCard = document.getElementById("gender-female");

  if (maleCard && femaleCard) {
    maleCard.addEventListener("click", () => selectGender("Laki-Laki"));
    femaleCard.addEventListener("click", () => selectGender("Perempuan"));
  }
}

function validateStep1() {
  const harta = Number(appState.calculatorData.harta) || 0;
  const hutang = Number(appState.calculatorData.hutang) || 0;
  const wasiat = Number(appState.calculatorData.wasiat) || 0;
  const biayaJenazah = Number(appState.calculatorData.biayaPerawatanJenazah) || 0;

  const sisaSebelumWasiat = harta - hutang;
  const maxWasiat = (1.0 / 3.0) * sisaSebelumWasiat;
  const hartaBersih = harta - (hutang + biayaJenazah + wasiat);

  const alertEl = document.getElementById("step1-alert");
  const btnNext = document.getElementById("btn-step1-next");

  if (harta <= 0) {
    showAlert(alertEl, "Silakan masukkan nominal Harta Kotor terlebih dahulu.", "info");
    if (btnNext) btnNext.disabled = true;
    return false;
  }

  if (harta <= hutang) {
    showAlert(alertEl, "Harta Kotor habis untuk melunasi Hutang! Harta Bersih <= 0.", "danger");
    if (btnNext) btnNext.disabled = true;
    return false;
  }

  if (wasiat > 0 && wasiat > maxWasiat) {
    showAlert(alertEl, `Wasiat (${AlMiratsCalculator.formatRupiah(wasiat)}) tidak boleh lebih dari 1/3 Harta Bersih setelah dikurang Hutang (${AlMiratsCalculator.formatRupiah(maxWasiat)}).`, "warning");
    if (btnNext) btnNext.disabled = true;
    return false;
  }

  if (hartaBersih <= 0) {
    showAlert(alertEl, "Harta Bersih habis (<= 0) setelah dikurangi Hutang, Biaya Jenazah, dan Wasiat.", "danger");
    if (btnNext) btnNext.disabled = true;
    return false;
  }

  hideAlert(alertEl);
  if (btnNext) btnNext.disabled = false;
  return true;
}

function showAlert(el, msg, type) {
  if (!el) return;
  el.className = `alert-banner alert-${type}`;
  el.innerHTML = `<i class="fas fa-exclamation-triangle"></i> <div>${msg}</div>`;
  el.style.display = "flex";
}

function hideAlert(el) {
  if (el) el.style.display = "none";
}

function selectGender(gender) {
  appState.calculatorData.jenisKelaminPewaris = gender;

  const maleCard = document.getElementById("gender-male");
  const femaleCard = document.getElementById("gender-female");

  if (gender === "Laki-Laki") {
    maleCard.classList.add("selected");
    femaleCard.classList.remove("selected");
    // Show Istri, Hide Suami
    document.getElementById("heir-row-istri").style.display = "flex";
    document.getElementById("heir-row-suami").style.display = "none";
    appState.calculatorData.adaSuami = false;
  } else {
    femaleCard.classList.add("selected");
    maleCard.classList.remove("selected");
    // Show Suami, Hide Istri
    document.getElementById("heir-row-suami").style.display = "flex";
    document.getElementById("heir-row-istri").style.display = "none";
    appState.calculatorData.istri = 0;
    updateCounterDisplay("istri", 0);
  }

  saveCalculatorState();
}

function updateCounter(type, delta) {
  let current = Number(appState.calculatorData[type]) || 0;
  current += delta;
  if (current < 0) current = 0;
  if (type === "istri" && current > 4) current = 4;

  appState.calculatorData[type] = current;
  updateCounterDisplay(type, current);
  saveCalculatorState();
}

function updateCounterDisplay(type, val) {
  const el = document.getElementById(`counter-${type}`);
  if (el) el.innerText = val;
}

function toggleCheckbox(type, checked) {
  appState.calculatorData[type] = Boolean(checked);
  saveCalculatorState();
}

function goToStep(step) {
  if (step > 1 && !validateStep1()) return;

  appState.wizardStep = step;

  // Update nodes
  for (let i = 1; i <= 4; i++) {
    const node = document.getElementById(`node-step-${i}`);
    if (node) {
      node.className = `step-node ${i < step ? 'completed' : i === step ? 'active' : ''}`;
    }

    const stepPane = document.getElementById(`wizard-step-${i}`);
    if (stepPane) {
      if (i === step) {
        stepPane.classList.add("active");
      } else {
        stepPane.classList.remove("active");
      }
    }
  }

  // Update Progress fill
  const fill = document.getElementById("wizard-fill");
  if (fill) {
    fill.style.width = `${(step - 1) * 33.33}%`;
  }

  if (step === 4) {
    calculateAndRenderResults();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetCalculator() {
  appState.calculatorData = {
    harta: 0,
    hutang: 0,
    biayaPerawatanJenazah: 0,
    wasiat: 0,
    jenisKelaminPewaris: 'Laki-Laki',
    adaAyah: false,
    adaIbu: false,
    adaSuami: false,
    istri: 0,
    anakLaki: 0,
    anakPerempuan: 0
  };

  ['harta', 'hutang', 'biayaPerawatanJenazah', 'wasiat'].forEach(id => {
    const inputEl = document.getElementById(`input-${id}`);
    const previewEl = document.getElementById(`preview-${id}`);
    if (inputEl) inputEl.value = '';
    if (previewEl) previewEl.innerText = 'Rp 0';
  });

  selectGender("Laki-Laki");
  ['cb-ayah', 'cb-ibu', 'cb-suami'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.checked = false;
  });

  ['istri', 'anakLaki', 'anakPerempuan'].forEach(type => {
    updateCounterDisplay(type, 0);
  });

  localStorage.removeItem("almirats_calc_data");
  goToStep(1);
}

function calculateAndRenderResults() {
  const res = AlMiratsCalculator.calculate(appState.calculatorData);
  appState.lastResults = res;

  // Render Summary Box
  const summaryContainer = document.getElementById("results-summary-box");
  if (summaryContainer) {
    summaryContainer.innerHTML = `
      <div class="summary-item">
        <span class="summary-label">Harta Kotor</span>
        <span class="summary-value">${AlMiratsCalculator.formatRupiah(res.hartaKotor)}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Total Beban (Hutang + Jenazah + Wasiat)</span>
        <span class="summary-value" style="color: var(--danger);">- ${AlMiratsCalculator.formatRupiah(res.hutang + res.biayaJenazah + res.wasiat)}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Harta Bersih Yang Dibagi</span>
        <span class="summary-value" style="color: var(--success);">${res.formattedHartaBersih}</span>
      </div>
      <div class="summary-item">
        <span class="summary-label">Jenis Kelamin Pewaris</span>
        <span class="summary-value" style="color: var(--text-main);">${res.jenisKelaminPewaris}</span>
      </div>
    `;
  }

  // Case Alert Banner (Radd / Aul)
  const alertBox = document.getElementById("results-case-alert");
  if (alertBox) {
    if (res.keteranganKasus === "Radd") {
      showAlert(alertBox, "<strong>Kasus Radd:</strong> Sisa harta dikembalikan secara proporsional kepada para ahli waris karena total bagian < 1.", "warning");
    } else if (res.keteranganKasus === "Aul") {
      showAlert(alertBox, "<strong>Kasus Aul:</strong> Porsi saham disesuaikan secara proporsional karena total bagian ahli waris melebihi 1 (melebihi asal masalah).", "danger");
    } else {
      hideAlert(alertBox);
    }
  }

  // Render Table
  const tbody = document.getElementById("results-table-body");
  if (tbody) {
    tbody.innerHTML = res.heirs.map(h => `
      <tr>
        <td><strong>${h.nama}</strong></td>
        <td><span class="badge-fraction">${h.bagian}</span></td>
        <td><strong>${h.jumlah} Orang</strong></td>
        <td><strong style="color: var(--primary);">${h.totalHarta}</strong></td>
        <td><strong style="color: var(--success);">${h.hartaPerOrang}</strong></td>
        <td>
          ${h.keterangan ? `<span class="badge-note badge-${h.keterangan.toLowerCase()}">${h.keterangan}</span>` : '-'}
        </td>
      </tr>
    `).join('');
  }
}

/* ==========================================================================
   Persistence Management (LocalStorage)
   ========================================================================== */
function saveCalculatorState() {
  localStorage.setItem("almirats_calc_data", JSON.stringify(appState.calculatorData));
}

function loadSavedState() {
  const saved = localStorage.getItem("almirats_calc_data");
  if (!saved) return;

  try {
    const parsed = JSON.parse(saved);
    appState.calculatorData = { ...appState.calculatorData, ...parsed };

    // Fill inputs
    ['harta', 'hutang', 'biayaPerawatanJenazah', 'wasiat'].forEach(id => {
      const inputEl = document.getElementById(`input-${id}`);
      const previewEl = document.getElementById(`preview-${id}`);
      const val = appState.calculatorData[id] || 0;
      if (inputEl && val > 0) inputEl.value = val;
      if (previewEl && val > 0) previewEl.innerText = AlMiratsCalculator.formatRupiah(val);
    });

    selectGender(appState.calculatorData.jenisKelaminPewaris || "Laki-Laki");

    const cbAyah = document.getElementById("cb-ayah");
    if (cbAyah) cbAyah.checked = Boolean(appState.calculatorData.adaAyah);

    const cbIbu = document.getElementById("cb-ibu");
    if (cbIbu) cbIbu.checked = Boolean(appState.calculatorData.adaIbu);

    const cbSuami = document.getElementById("cb-suami");
    if (cbSuami) cbSuami.checked = Boolean(appState.calculatorData.adaSuami);

    ['istri', 'anakLaki', 'anakPerempuan'].forEach(type => {
      updateCounterDisplay(type, appState.calculatorData[type] || 0);
    });
  } catch (e) {
    console.error("Failed to load saved state:", e);
  }
}
