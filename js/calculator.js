/**
 * ==========================================================================
 * Web Kalkulator Al-Mirats - Core Faraidh Inheritance Calculator Engine
 * Ported & enhanced from Android HasilKalkulatorActivity.kt
 * ==========================================================================
 */

class AlMiratsCalculator {
  /**
   * Format numbers to Indonesian Rupiah (Rp)
   * @param {number} amount 
   * @returns {string} e.g. "Rp 100.000.000"
   */
  static formatRupiah(amount) {
    if (isNaN(amount) || amount === null || amount === undefined) amount = 0;
    const rounded = Math.round(amount);
    const formatted = new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      maximumFractionDigits: 0
    }).format(rounded);
    // Standardize to "Rp 100.000.000"
    return formatted.replace('Rp', 'Rp ').replace(/\s+/g, ' ');
  }

  /**
   * Main calculation function
   * @param {Object} input 
   * @param {number} input.harta - Harta Kotor
   * @param {number} input.hutang - Total Hutang
   * @param {number} input.biayaPerawatanJenazah - Biaya Perawatan Jenazah
   * @param {number} input.wasiat - Wasiat (max 1/3 harta bersih)
   * @param {string} input.jenisKelaminPewaris - "Laki-Laki" | "Perempuan"
   * @param {boolean} input.adaAyah
   * @param {boolean} input.adaIbu
   * @param {boolean} input.adaSuami
   * @param {number} input.istri - Count (0-4)
   * @param {number} input.anakLaki - Count (>= 0)
   * @param {number} input.anakPerempuan - Count (>= 0)
   * @returns {Object} Calculation result & table data
   */
  static calculate(input) {
    const totalHarta = Number(input.harta) || 0;
    const hutang = Number(input.hutang) || 0;
    const biayaJenazah = Number(input.biayaPerawatanJenazah) || 0;
    const wasiat = Number(input.wasiat) || 0;

    // Harta Bersih
    const harta = totalHarta - (hutang + biayaJenazah + wasiat);

    const jenisKelaminPewaris = input.jenisKelaminPewaris || "Laki-Laki";
    const adaAyah = Boolean(input.adaAyah);
    const adaIbu = Boolean(input.adaIbu);
    const adaSuami = (jenisKelaminPewaris === "Perempuan") ? Boolean(input.adaSuami) : false;
    const istri = (jenisKelaminPewaris === "Laki-Laki") ? (Number(input.istri) || 0) : 0;
    const anakLaki = Number(input.anakLaki) || 0;
    const anakPerempuan = Number(input.anakPerempuan) || 0;

    let keterangan = "";

    let bagianIbu = "";
    let bagianAyah = "";
    let bagianSuami = "";
    let bagianIstri = "";
    let bagianAnakPerempuan = "";
    let bagianAnakLaki = "";

    let hartaAyah = 0;
    let hartaIbu = 0;
    let hartaSuami = 0;
    let hartaIstri = 0;
    let hartaAnakLaki = 0;
    let hartaAnakPerempuan = 0;

    let sisaHarta = 0;

    // Direct port of Kotlin decision tree from HasilKalkulatorActivity.kt
    if (!adaSuami && istri === 0) {
      if (!adaAyah && !adaIbu) {
        if (anakPerempuan === 0) {
          if (anakLaki >= 1) {
            bagianAnakLaki = "Ashobah";
            hartaAnakLaki = harta;
          }
        } else if (anakPerempuan >= 1) {
          if (anakLaki === 0) {
            bagianAnakPerempuan = (anakPerempuan === 1) ? "1/2 → 1/1" : "2/3 → 1/1";
            hartaAnakPerempuan = harta;
            keterangan = "Radd";
          } else if (anakLaki >= 1) {
            bagianAnakLaki = "Ashobah";
            bagianAnakPerempuan = "Ashobah-Bil-Ghoir";
            hartaAnakLaki = harta * (anakLaki * 2) / (anakLaki * 2 + anakPerempuan);
            hartaAnakPerempuan = harta * (anakPerempuan) / (anakLaki * 2 + anakPerempuan);
          }
        }
      } else if (!adaAyah && adaIbu) {
        if (anakLaki === 0) {
          if (anakPerempuan === 0) {
            bagianIbu = "1/3 → 1/1";
            hartaIbu = harta;
            keterangan = "Radd";
          } else if (anakPerempuan === 1) {
            bagianIbu = "1/6 → 1/4";
            bagianAnakPerempuan = "1/2 → 3/4";
            hartaIbu = harta * (1.0 / 4.0);
            sisaHarta = harta - hartaIbu;
            hartaAnakPerempuan = sisaHarta;
            keterangan = "Radd";
          } else if (anakPerempuan > 1) {
            bagianIbu = "1/6 → 1/5";
            bagianAnakPerempuan = "2/3 → 4/5";
            hartaIbu = harta * (1.0 / 5.0);
            sisaHarta = harta - hartaIbu;
            hartaAnakPerempuan = sisaHarta;
            keterangan = "Radd";
          }
        } else if (anakLaki >= 1) {
          bagianIbu = "1/6 → 1/6";
          hartaIbu = harta * (1.0 / 6.0);
          sisaHarta = harta - hartaIbu;
          if (anakPerempuan === 0) {
            bagianAnakLaki = "Ashobah";
            hartaAnakLaki = sisaHarta;
          } else if (anakPerempuan >= 1) {
            bagianAnakLaki = "Ashobah";
            bagianAnakPerempuan = "Ashobah-Bil-Ghoir";
            hartaAnakLaki = sisaHarta * (anakLaki * 2) / (anakLaki * 2 + anakPerempuan);
            hartaAnakPerempuan = sisaHarta * (anakPerempuan) / (anakLaki * 2 + anakPerempuan);
          }
        }
      } else if (adaAyah && !adaIbu) {
        if (anakLaki === 0) {
          if (anakPerempuan === 0) {
            bagianAyah = "Ashobah";
            hartaAyah = harta;
          } else if (anakPerempuan === 1) {
            hartaAnakPerempuan = harta * (1.0 / 2.0);
            hartaAyah = harta - hartaAnakPerempuan;
            bagianAyah = "1/6+Ashobah → 1/4";
            bagianAnakPerempuan = "1/2 → 3/4";
          } else if (anakPerempuan > 1) {
            hartaAnakPerempuan = harta * (2.0 / 3.0);
            hartaAyah = harta - hartaAnakPerempuan;
            bagianAyah = "1/6+Ashobah → 1/5";
            bagianAnakPerempuan = "2/3 → 4/5";
          }
        } else if (anakLaki >= 1) {
          bagianAyah = "1/6 → 1/6";
          hartaAyah = harta * (1.0 / 6.0);
          sisaHarta = harta - hartaAyah;
          if (anakPerempuan === 0) {
            bagianAnakLaki = "Ashobah";
            hartaAnakLaki = sisaHarta;
          } else if (anakPerempuan >= 1) {
            bagianAnakLaki = "Ashobah";
            bagianAnakPerempuan = "Ashobah-Bil-Ghoir";
            hartaAnakLaki = sisaHarta * (anakLaki * 2) / (anakLaki * 2 + anakPerempuan);
            hartaAnakPerempuan = sisaHarta * (anakPerempuan) / (anakLaki * 2 + anakPerempuan);
          }
        }
      } else if (adaAyah && adaIbu) {
        hartaAyah = harta * (1.0 / 6.0);
        hartaIbu = harta * (1.0 / 6.0);
        if (anakLaki === 0) {
          if (anakPerempuan === 0) {
            bagianAyah = "Ashobah";
            bagianIbu = "1/3 → 1/3";
            hartaAyah = harta * (2.0 / 3.0);
            hartaIbu = harta * (1.0 / 3.0);
          } else if (anakPerempuan >= 1) {
            if (anakPerempuan === 1) {
              bagianAnakPerempuan = "1/2 → 3/5";
              bagianIbu = "1/6 → 1/5";
              bagianAyah = "1/6+Ashobah → 1/5";
              hartaAnakPerempuan = harta * (1.0 / 2.0);
              sisaHarta = harta - (hartaIbu + hartaAnakPerempuan + hartaAyah);
              hartaAyah += sisaHarta;
            } else if (anakPerempuan > 1) {
              bagianAnakPerempuan = "2/3 → 4/6";
              bagianIbu = "1/6 → 1/6";
              bagianAyah = "1/6+Ashobah → 1/6";
              hartaAnakPerempuan = harta * (2.0 / 3.0);
            }
          }
        } else if (anakLaki >= 1) {
          bagianAyah = "1/6 → 1/6";
          bagianIbu = "1/6 → 1/6";
          if (anakPerempuan === 0) {
            bagianAnakLaki = "Ashobah";
            hartaAnakLaki = harta * (4.0 / 6.0);
          } else if (anakPerempuan >= 1) {
            bagianAnakLaki = "Ashobah";
            bagianAnakPerempuan = "Ashobah-Bil-Ghoir";
            sisaHarta = harta - (harta * (1.0 / 6.0) * 2);
            hartaAnakLaki = sisaHarta * (anakLaki * 2) / (anakLaki * 2 + anakPerempuan);
            hartaAnakPerempuan = sisaHarta * (anakPerempuan) / (anakLaki * 2 + anakPerempuan);
          }
        }
      }
    } else if (adaSuami || istri > 0) {
      if (!adaAyah && !adaIbu) {
        if (anakPerempuan === 0) {
          if (anakLaki === 0) {
            bagianIstri = "1/4 → 1/4";
            bagianSuami = "1/2 → 1/2";
            if (jenisKelaminPewaris === "Laki-Laki") {
              hartaIstri = harta * (1.0 / 4.0);
              sisaHarta = harta - hartaIstri;
            } else if (jenisKelaminPewaris === "Perempuan") {
              hartaSuami = harta * (1.0 / 2.0);
              sisaHarta = harta - hartaSuami;
            }
          } else if (anakLaki >= 1) {
            bagianSuami = "1/4 → 1/4";
            bagianIstri = "1/8 → 1/8";
            bagianAnakLaki = "Ashobah";
            hartaSuami = harta * (1.0 / 4.0);
            hartaIstri = harta * (1.0 / 8.0);
            if (jenisKelaminPewaris === "Laki-Laki") {
              hartaAnakLaki = harta * (7.0 / 8.0);
            } else if (jenisKelaminPewaris === "Perempuan") {
              hartaAnakLaki = harta * (3.0 / 4.0);
            }
          }
        } else if (anakPerempuan >= 1) {
          if (anakLaki === 0) {
            bagianSuami = "1/4 → 1/4";
            bagianIstri = "1/8 → 1/8";
            hartaSuami = harta * (1.0 / 4.0);
            hartaIstri = harta * (1.0 / 8.0);
            if (jenisKelaminPewaris === "Laki-Laki") {
              hartaAnakPerempuan = harta * (7.0 / 8.0);
              bagianAnakPerempuan = (anakPerempuan > 1) ? "2/3 → 7/8" : "1/2 → 7/8";
              keterangan = "Radd";
            } else if (jenisKelaminPewaris === "Perempuan") {
              hartaAnakPerempuan = harta * (3.0 / 4.0);
              bagianAnakPerempuan = (anakPerempuan > 1) ? "2/3 → 3/4" : "1/2 → 3/4";
              keterangan = "Radd";
            }
          } else if (anakLaki >= 1) {
            hartaSuami = harta * (1.0 / 4.0);
            hartaIstri = harta * (1.0 / 8.0);
            bagianSuami = "1/4 → 1/4";
            bagianIstri = "1/8 → 1/8";
            bagianAnakLaki = "Ashobah";
            bagianAnakPerempuan = "Ashobah-Bil-Ghoir";
            if (jenisKelaminPewaris === "Laki-Laki") {
              sisaHarta = harta - hartaIstri;
            } else if (jenisKelaminPewaris === "Perempuan") {
              sisaHarta = harta - hartaSuami;
            }
            hartaAnakPerempuan = sisaHarta * (anakPerempuan / (anakLaki * 2 + anakPerempuan));
            hartaAnakLaki = sisaHarta * ((anakLaki * 2) / (anakLaki * 2 + anakPerempuan));
          }
        }
      } else if (!adaAyah && adaIbu) {
        if (anakLaki === 0) {
          if (anakPerempuan === 0) {
            if (jenisKelaminPewaris === "Laki-Laki") {
              bagianIbu = "1/3 → 3/4";
              bagianIstri = "1/4 → 1/4";
              hartaIbu = harta * (3.0 / 4.0);
              hartaIstri = harta * (1.0 / 4.0);
            } else if (jenisKelaminPewaris === "Perempuan") {
              bagianSuami = "1/2 → 1/2";
              bagianIbu = "1/3 → 1/2";
              hartaSuami = harta * (1.0 / 2.0);
              hartaIbu = harta * (1.0 / 2.0);
            }
          } else if (anakPerempuan === 1) {
            if (jenisKelaminPewaris === "Laki-Laki") {
              bagianIbu = "1/6 → 7/32";
              bagianIstri = "1/8 → 1/8";
              bagianAnakPerempuan = "1/2 → 21/32";
              hartaIstri = harta * (1.0 / 8.0);
              sisaHarta = harta - hartaIstri;
              hartaIbu = sisaHarta * (1.0 / 4.0);
              hartaAnakPerempuan = sisaHarta * (3.0 / 4.0);
              keterangan = "Radd";
            } else if (jenisKelaminPewaris === "Perempuan") {
              bagianIbu = "1/6 → 3/16";
              bagianSuami = "1/4 → 1/4";
              bagianAnakPerempuan = "1/2 → 9/16";
              hartaSuami = harta * (1.0 / 4.0);
              sisaHarta = harta - hartaSuami;
              hartaIbu = sisaHarta * (1.0 / 4.0);
              hartaAnakPerempuan = sisaHarta * (3.0 / 4.0);
              keterangan = "Radd";
            }
          } else if (anakPerempuan > 1) {
            if (jenisKelaminPewaris === "Laki-Laki") {
              bagianIbu = "1/6 → 7/40";
              bagianIstri = "1/8 → 1/8";
              bagianAnakPerempuan = "2/3 → 7/10";
              hartaIstri = harta * (1.0 / 8.0);
              sisaHarta = harta - hartaIstri;
              hartaIbu = sisaHarta * (1.0 / 5.0);
              hartaAnakPerempuan = sisaHarta * (4.0 / 5.0);
              keterangan = "Radd";
            } else if (jenisKelaminPewaris === "Perempuan") {
              bagianIbu = "1/6 → 2/13";
              bagianSuami = "1/4 → 3/13";
              bagianAnakPerempuan = "2/3 → 8/13";
              hartaSuami = harta * (3.0 / 13.0);
              hartaIbu = harta * (2.0 / 13.0);
              hartaAnakPerempuan = harta * (8.0 / 13.0);
              keterangan = "Aul";
            }
          }
        } else if (anakLaki >= 1) {
          if (anakPerempuan === 0) {
            hartaSuami = harta * (1.0 / 4.0);
            hartaIstri = harta * (1.0 / 8.0);
            hartaIbu = harta * (1.0 / 6.0);
            if (jenisKelaminPewaris === "Laki-Laki") {
              bagianIbu = "1/6 → 4/24";
              bagianIstri = "1/8 → 3/24";
              bagianAnakLaki = "Ashobah";
              sisaHarta = harta - (hartaIstri + hartaIbu);
              hartaAnakLaki = sisaHarta;
            } else if (jenisKelaminPewaris === "Perempuan") {
              bagianIbu = "1/6 → 2/12";
              bagianSuami = "1/4 → 3/12";
              bagianAnakLaki = "Ashobah";
              sisaHarta = harta - (hartaSuami + hartaIbu);
              hartaAnakLaki = sisaHarta;
            }
          } else if (anakPerempuan >= 1) {
            hartaIbu = harta * (1.0 / 6.0);
            hartaSuami = harta * (1.0 / 4.0);
            hartaIstri = harta * (1.0 / 8.0);
            bagianAnakLaki = "Ashobah";
            bagianAnakPerempuan = "Ashobah-Bil-Ghoir";
            if (jenisKelaminPewaris === "Laki-Laki") {
              bagianIstri = "1/8 → 3/24";
              bagianIbu = "1/6 → 4/24";
              sisaHarta = harta - (hartaIstri + hartaIbu);
            } else if (jenisKelaminPewaris === "Perempuan") {
              bagianIbu = "1/6 → 2/12";
              bagianSuami = "1/4 → 3/12";
              sisaHarta = harta - (hartaSuami + hartaIbu);
            }
            hartaAnakLaki = sisaHarta * ((anakLaki * 2) / (anakLaki * 2 + anakPerempuan));
            hartaAnakPerempuan = sisaHarta * (anakPerempuan / (anakLaki * 2 + anakPerempuan));
          }
        }
      } else if (adaAyah && !adaIbu) {
        if (anakLaki === 0) {
          if (anakPerempuan === 0) {
            hartaIstri = harta * (1.0 / 4.0);
            hartaSuami = harta * (1.0 / 2.0);
            bagianAyah = "Ashobah";
            bagianSuami = "1/2 → 1/2";
            bagianIstri = "1/4 → 1/4";
            if (jenisKelaminPewaris === "Laki-Laki") {
              hartaAyah = harta * (3.0 / 4.0);
            } else if (jenisKelaminPewaris === "Perempuan") {
              hartaAyah = harta * (1.0 / 2.0);
            }
          } else if (anakPerempuan === 1) {
            hartaAyah = harta * (1.0 / 6.0);
            hartaSuami = harta * (1.0 / 4.0);
            hartaIstri = harta * (1.0 / 8.0);
            hartaAnakPerempuan = harta * (1.0 / 2.0);
            if (jenisKelaminPewaris === "Laki-Laki") {
              bagianAyah = "1/6+Ashobah → 7/32";
              bagianIstri = "1/8 → 1/8";
              bagianAnakPerempuan = "1/2 → 21/32";
              sisaHarta = harta - (hartaIstri + hartaAnakPerempuan + hartaAyah);
              hartaAyah += sisaHarta;
            } else if (jenisKelaminPewaris === "Perempuan") {
              bagianAyah = "1/6+Ashobah → 3/16";
              bagianSuami = "1/4 → 1/4";
              bagianAnakPerempuan = "1/2 → 9/16";
              sisaHarta = harta - (hartaSuami + hartaAnakPerempuan + hartaAyah);
              hartaAyah += sisaHarta;
            }
          } else if (anakPerempuan > 1) {
            if (jenisKelaminPewaris === "Laki-Laki") {
              bagianAyah = "1/6+Ashobah → 7/40";
              bagianIstri = "1/8 → 1/8";
              bagianAnakPerempuan = "2/3 → 7/10";
              hartaIstri = harta * (1.0 / 8.0);
              hartaAyah = harta * (1.0 / 6.0);
              hartaAnakPerempuan = harta * (2.0 / 3.0);
              sisaHarta = harta - (hartaIstri + hartaAyah + hartaAnakPerempuan);
              hartaAyah += sisaHarta;
            } else if (jenisKelaminPewaris === "Perempuan") {
              bagianAyah = "1/6+Ashobah → 2/13";
              bagianSuami = "1/4 → 3/13";
              bagianAnakPerempuan = "2/3 → 8/13";
              hartaAyah = harta * (2.0 / 13.0);
              hartaSuami = harta * (3.0 / 13.0);
              hartaAnakPerempuan = harta * (8.0 / 13.0);
              keterangan = "Aul";
            }
          }
        } else if (anakLaki >= 1) {
          if (anakPerempuan === 0) {
            hartaSuami = harta * (1.0 / 4.0);
            hartaIstri = harta * (1.0 / 8.0);
            hartaAyah = harta * (1.0 / 6.0);
            bagianAnakLaki = "Ashobah";
            if (jenisKelaminPewaris === "Laki-Laki") {
              bagianAyah = "1/6 → 4/24";
              bagianIstri = "1/8 → 3/24";
              sisaHarta = harta - (hartaIstri + hartaAyah);
              hartaAnakLaki = sisaHarta;
            } else if (jenisKelaminPewaris === "Perempuan") {
              bagianAyah = "1/6 → 2/12";
              bagianSuami = "1/4 → 3/12";
              sisaHarta = harta - (hartaSuami + hartaAyah);
              hartaAnakLaki = sisaHarta;
            }
          } else if (anakPerempuan >= 1) {
            hartaAyah = harta * (1.0 / 6.0);
            hartaSuami = harta * (1.0 / 4.0);
            hartaIstri = harta * (1.0 / 8.0);
            bagianAnakLaki = "Ashobah";
            bagianAnakPerempuan = "Ashobah-Bil-Ghoir";
            if (jenisKelaminPewaris === "Laki-Laki") {
              bagianAyah = "1/6 → 4/24";
              bagianIstri = "1/8 → 3/24";
              sisaHarta = harta - (hartaIstri + hartaAyah);
            } else if (jenisKelaminPewaris === "Perempuan") {
              bagianAyah = "1/6 → 2/12";
              bagianSuami = "1/4 → 3/12";
              sisaHarta = harta - (hartaSuami + hartaAyah);
            }
            hartaAnakLaki = sisaHarta * ((anakLaki * 2) / (anakLaki * 2 + anakPerempuan));
            hartaAnakPerempuan = sisaHarta * (anakPerempuan / (anakLaki * 2 + anakPerempuan));
          }
        }
      } else if (adaAyah && adaIbu) {
        if (anakLaki === 0) {
          if (anakPerempuan === 0) {
            hartaAyah = harta * (2.0 / 6.0);
            hartaSuami = harta * (1.0 / 2.0);
            hartaIstri = harta * (1.0 / 4.0);
            bagianAyah = "Ashobah";
            if (jenisKelaminPewaris === "Laki-Laki") {
              bagianIbu = "U";
              bagianIstri = "1/4 → 1/4";
              hartaIbu = harta * (1.0 / 4.0);
              sisaHarta = harta - (hartaAyah + hartaIbu + hartaIstri);
              hartaAyah += sisaHarta;
            } else if (jenisKelaminPewaris === "Perempuan") {
              bagianIbu = "U";
              bagianSuami = "1/2 → 1/2";
              hartaIbu = harta * (1.0 / 6.0);
            }
          } else if (anakPerempuan >= 1) {
            if (anakPerempuan === 1) {
              if (jenisKelaminPewaris === "Laki-Laki") {
                hartaAyah = harta * (1.0 / 6.0);
                hartaIbu = harta * (1.0 / 6.0);
                hartaIstri = harta * (1.0 / 8.0);
                hartaAnakPerempuan = harta * (1.0 / 2.0);
                bagianAyah = "1/6+Ashobah → 7/40";
                bagianIbu = "1/6 → 7/40";
                bagianIstri = "1/8 → 1/8";
                bagianAnakPerempuan = "1/2 → 21/40";
                sisaHarta = harta - (hartaAyah + hartaIbu + hartaIstri + hartaAnakPerempuan);
                hartaAyah += sisaHarta;
              } else if (jenisKelaminPewaris === "Perempuan") {
                hartaAyah = harta * (2.0 / 13.0);
                hartaIbu = harta * (2.0 / 13.0);
                hartaSuami = harta * (3.0 / 13.0);
                hartaAnakPerempuan = harta * (6.0 / 13.0);
                bagianAyah = "1/6+Ashobah → 2/13";
                bagianIbu = "1/6 → 2/13";
                bagianSuami = "1/4 → 3/13";
                bagianAnakPerempuan = "1/2 → 6/13";
                keterangan = "Aul";
              }
            } else if (anakPerempuan > 1) {
              if (jenisKelaminPewaris === "Laki-Laki") {
                hartaAyah = harta * (4.0 / 27.0);
                hartaIbu = harta * (4.0 / 27.0);
                hartaIstri = harta * (3.0 / 27.0);
                hartaAnakPerempuan = harta * (16.0 / 27.0);
                bagianAyah = "1/6+Ashobah → 4/27";
                bagianIbu = "1/6 → 4/27";
                bagianIstri = "1/8 → 3/27";
                bagianAnakPerempuan = "2/3 → 16/27";
                sisaHarta = harta - (hartaAyah + hartaIbu + hartaIstri + hartaAnakPerempuan);
                hartaAyah += sisaHarta;
                keterangan = "Aul";
              } else if (jenisKelaminPewaris === "Perempuan") {
                hartaAyah = harta * (2.0 / 15.0);
                hartaIbu = harta * (2.0 / 15.0);
                hartaSuami = harta * (3.0 / 15.0);
                hartaAnakPerempuan = harta * (8.0 / 15.0);
                bagianAyah = "2/15+Ashobah → 2/15";
                bagianIbu = "1/6 → 2/15";
                bagianSuami = "1/4 → 3/15";
                bagianAnakPerempuan = "2/3 → 8/15";
                keterangan = "Aul";
              }
            }
          }
        } else if (anakLaki >= 1) {
          if (anakPerempuan === 0) {
            if (jenisKelaminPewaris === "Laki-Laki") {
              hartaIbu = harta * (1.0 / 6.0);
              hartaAyah = harta * (1.0 / 6.0);
              hartaIstri = harta * (1.0 / 8.0);
              sisaHarta = harta - (hartaIbu + hartaAyah + hartaIstri);
              hartaAnakLaki = sisaHarta;
              bagianAyah = "1/6 → 4/24";
              bagianIbu = "1/6 → 4/24";
              bagianIstri = "1/8 → 3/24";
              bagianAnakLaki = "Ashobah";
            } else if (jenisKelaminPewaris === "Perempuan") {
              hartaIbu = harta * (1.0 / 6.0);
              hartaAyah = harta * (1.0 / 6.0);
              hartaSuami = harta * (1.0 / 4.0);
              sisaHarta = harta - (hartaIbu + hartaAyah + hartaSuami);
              hartaAnakLaki = sisaHarta;
              bagianAyah = "1/6 → 2/12";
              bagianIbu = "1/6 → 2/12";
              bagianSuami = "1/4 → 3/12";
              bagianAnakLaki = "Ashobah";
            }
          } else if (anakPerempuan >= 1) {
            bagianAyah = (jenisKelaminPewaris === "Laki-Laki") ? "1/6 → 4/24" : "1/6 → 2/12";
            bagianIbu = (jenisKelaminPewaris === "Laki-Laki") ? "1/6 → 4/24" : "1/6 → 2/12";
            bagianAnakLaki = "Ashobah";
            bagianAnakPerempuan = "Ashobah-Bil-Ghoir";
            hartaIbu = harta * (1.0 / 6.0);
            hartaAyah = harta * (1.0 / 6.0);
            if (jenisKelaminPewaris === "Laki-Laki") {
              hartaIstri = harta * (1.0 / 8.0);
              sisaHarta = harta - (hartaIbu + hartaAyah + hartaIstri);
              bagianIstri = "1/8 → 3/24";
            } else if (jenisKelaminPewaris === "Perempuan") {
              hartaSuami = harta * (1.0 / 4.0);
              sisaHarta = harta - (hartaIbu + hartaAyah + hartaSuami);
              bagianSuami = "1/4 → 3/12";
            }
            hartaAnakLaki = sisaHarta * ((anakLaki * 2) / (anakLaki * 2 + anakPerempuan));
            hartaAnakPerempuan = sisaHarta * (anakPerempuan / (anakLaki * 2 + anakPerempuan));
          }
        }
      }
    }

    // Assemble list of WarisData entries
    const listData = [];

    const hasAnyFamilyHeirs = adaIbu || adaAyah || adaSuami || istri >= 1 || anakPerempuan >= 1 || anakLaki >= 1;

    if (hasAnyFamilyHeirs) {
      if (adaAyah) {
        listData.push({
          nama: "Ayah",
          bagian: bagianAyah,
          jumlah: 1,
          totalHarta: this.formatRupiah(hartaAyah),
          hartaPerOrang: this.formatRupiah(hartaAyah),
          keterangan: keterangan
        });
      }
      if (adaIbu) {
        listData.push({
          nama: "Ibu",
          bagian: bagianIbu,
          jumlah: 1,
          totalHarta: this.formatRupiah(hartaIbu),
          hartaPerOrang: this.formatRupiah(hartaIbu),
          keterangan: keterangan
        });
      }
      if (jenisKelaminPewaris === "Laki-Laki") {
        if (istri >= 1) {
          listData.push({
            nama: "Istri",
            bagian: bagianIstri,
            jumlah: istri,
            totalHarta: this.formatRupiah(hartaIstri),
            hartaPerOrang: this.formatRupiah(hartaIstri / istri),
            keterangan: keterangan
          });
        }
      } else {
        if (adaSuami) {
          listData.push({
            nama: "Suami",
            bagian: bagianSuami,
            jumlah: 1,
            totalHarta: this.formatRupiah(hartaSuami),
            hartaPerOrang: this.formatRupiah(hartaSuami),
            keterangan: keterangan
          });
        }
      }
      if (anakLaki >= 1) {
        listData.push({
          nama: "Anak Laki-Laki",
          bagian: bagianAnakLaki,
          jumlah: anakLaki,
          totalHarta: this.formatRupiah(hartaAnakLaki),
          hartaPerOrang: this.formatRupiah(hartaAnakLaki / anakLaki),
          keterangan: keterangan
        });
      }
      if (anakPerempuan >= 1) {
        listData.push({
          nama: "Anak Perempuan",
          bagian: bagianAnakPerempuan,
          jumlah: anakPerempuan,
          totalHarta: this.formatRupiah(hartaAnakPerempuan),
          hartaPerOrang: this.formatRupiah(hartaAnakPerempuan / anakPerempuan),
          keterangan: keterangan
        });
      }
    } else {
      listData.push({
        nama: "Baitul Mal",
        bagian: "1/1",
        jumlah: 0,
        totalHarta: this.formatRupiah(harta),
        hartaPerOrang: this.formatRupiah(harta),
        keterangan: keterangan
      });
    }

    if (!adaIbu && !adaAyah && (adaSuami || istri >= 1) && anakPerempuan < 1 && anakLaki < 1) {
      listData.push({
        nama: "Baitul Mal",
        bagian: "Ashobah",
        jumlah: 0,
        totalHarta: this.formatRupiah(sisaHarta),
        hartaPerOrang: this.formatRupiah(sisaHarta),
        keterangan: keterangan
      });
    }

    return {
      hartaKotor: totalHarta,
      hutang: hutang,
      biayaJenazah: biayaJenazah,
      wasiat: wasiat,
      hartaBersih: harta,
      formattedHartaBersih: this.formatRupiah(harta),
      jenisKelaminPewaris: jenisKelaminPewaris,
      keteranganKasus: keterangan,
      heirs: listData
    };
  }
}
