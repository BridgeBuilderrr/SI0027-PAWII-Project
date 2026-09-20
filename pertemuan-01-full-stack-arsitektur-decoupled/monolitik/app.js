// Mini Project - Pertemuan 1: Arsitektur Monolitik
// Tujuan: server merender tampilan HTML langsung untuk dikirim ke browser.

const express = require("express");
const app = express();
const PORT = 3000;

const produk = [
  { nama: "Laptop", harga: 8500000 },
  { nama: "Smartphone", harga: 4200000 },
  { nama: "Keyboard", harga: 550000 }
];

function renderHalamanProduk(daftarProduk) {
  const itemHtml = daftarProduk
    .map((item) => `<li>${item.nama} - Rp ${item.harga.toLocaleString("id-ID")}</li>`)
    .join("");

  return `
    <html>
      <head><title>TokoKita - Monolitik</title></head>
      <body>
        <h1>Daftar Produk (Monolitik)</h1>
        <ul>${itemHtml}</ul>
      </body>
    </html>
  `;
}

app.get("/produk", (req, res) => {
  const html = renderHalamanProduk(produk);
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server monolitik berjalan di http://localhost:${PORT}/produk`);
});
