// Mini Project - Pertemuan 1: Arsitektur Decoupled (Frontend)
// Tujuan: frontend mengonsumsi API backend secara asinkron, lalu menampilkannya.
//
// TODO Mahasiswa:
// 1. Ambil data dari endpoint API backend (http://localhost:4000/api/produk)
//    menggunakan fetch().
// 2. Tampilkan setiap produk sebagai elemen <li> di dalam #daftar-produk.
// 3. Buka file ini melalui server statis sederhana (mis. ekstensi Live Server),
//    BUKAN langsung dari file:// agar fetch() dapat berjalan.

const API_URL = "http://localhost:4000/api/produk";

async function muatProduk() {
  const container = document.getElementById("daftar-produk");

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }

    const data = await response.json();

    data.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = `${item.nama} - Rp ${Number(item.harga).toLocaleString("id-ID")}`;
      container.appendChild(li);
    });
  } catch (error) {
    console.error("Gagal memuat produk:", error);
    container.textContent = "Gagal memuat produk.";
  }
}

muatProduk();
