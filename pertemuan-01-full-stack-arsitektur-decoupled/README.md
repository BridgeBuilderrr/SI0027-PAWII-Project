# Pertemuan 1 - Full Stack Development & Arsitektur Aplikasi Web Decoupled

Mini-project pendamping untuk materi slide `Materi-Pertemuan-01-Full-Stack-Arsitektur-Decoupled.pptx`.

## Tujuan

Mendemonstrasikan secara langsung perbedaan antara:

- **Arsitektur Monolitik** - server merender tampilan HTML langsung ke browser.
- **Arsitektur Decoupled** - backend hanya menyediakan REST API (JSON), frontend berdiri sendiri dan mengonsumsi API tersebut.

## Struktur

```
pertemuan-01-full-stack-arsitektur-decoupled/
├── monolitik/
└── decoupled/
    ├── backend/
    └── frontend/
```

## Mengerjakan

Buka setiap file yang memiliki komentar `// TODO`, lalu lengkapi kodenya:

1. `monolitik/app.js` - lengkapi data produk & fungsi render HTML.
2. `decoupled/backend/app.js` - lengkapi data produk & endpoint JSON.
3. `decoupled/frontend/script.js` - lengkapi pengambilan data via `fetch()`.

Bandingkan hasil dan perilaku kedua arsitektur setelah keduanya berjalan.

```bash
# Arsitektur Monolitik
cd monolitik
npm install
npm start
# buka http://localhost:3000/produk

# Arsitektur Decoupled
cd decoupled/backend
npm install
npm start
# API tersedia di http://localhost:4000/api/produk

cd decoupled/frontend
npx http-server -p 5500
# buka http://localhost:5500
```

Solusi referensi tersedia di repositori terpisah [SI0027-PAWII-Solution](https://github.com/nurrachmat-nr/SI0027-PAWII-Solution).

## Kaitan dengan Tugas Project Mandiri

Folder ini adalah latihan pendamping di kelas, **bukan** jawaban dari Tugas Project Mandiri pada slide materi (analisis arsitektur aplikasi nyata & proposal arsitektur project akhir). Tugas tersebut dikumpulkan secara terpisah melalui LMS.
