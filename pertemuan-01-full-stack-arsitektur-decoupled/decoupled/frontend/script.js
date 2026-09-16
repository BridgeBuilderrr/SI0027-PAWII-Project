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

  // TODO 1: fetch data dari API_URL, ubah menjadi JSON

  // TODO 2: loop hasilnya, buat elemen <li>, lalu append ke `container`
}

muatProduk();
