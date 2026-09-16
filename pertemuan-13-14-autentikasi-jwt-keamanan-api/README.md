# Pertemuan 13-14 - Autentikasi Stateless dengan JWT & Keamanan API

Mini-project pendamping untuk materi slide `Materi-Pertemuan-13-14-Autentikasi-JWT-Keamanan-API.pptx`.

## Tujuan

Menambahkan autentikasi stateless dengan JSON Web Token (JWT) pada RESTful API (Mahasiswa & Prodi, dari Pertemuan 11-12): register, login, hashing password dengan bcrypt, serta middleware yang melindungi endpoint sensitif.

## Struktur

```
pertemuan-13-14-autentikasi-jwt-keamanan-api/
├── models/
├── controllers/
├── routes/
├── middlewares/
├── app.js
└── .env.example
```

## Endpoint Baru

| Method | Endpoint | Perlu Login? | Keterangan |
|---|---|---|---|
| POST | `/auth/register` | Tidak | Password di-hash dengan bcrypt sebelum disimpan |
| POST | `/auth/login` | Tidak | Mengembalikan `{ token }` (JWT, `expiresIn: '1h'`) jika berhasil |
| GET | `/mahasiswa`, `/mahasiswa/:id` | Tidak | Tetap publik |
| POST/PUT/DELETE | `/mahasiswa` | **Ya** | Wajib header `Authorization: Bearer <token>` |
| GET/POST | `/prodi` | Tidak | Tetap publik (tidak diubah dari Pertemuan 11-12) |

## Middleware `verifyToken`

`middlewares/verifyToken.js` membaca header `Authorization: Bearer <token>`, memverifikasinya dengan `jwt.verify()`, lalu menyisipkan payload ke `req.user`. Request tanpa token atau dengan token tidak valid/kedaluwarsa dihentikan dengan `401`, ditangani lewat `middlewares/errorHandler.js` (dipertahankan dari Pertemuan 11-12) via `express-async-errors`.

## Mengerjakan

Lengkapi setiap `// TODO` pada `controllers/authController.js` (fungsi `register` & `login`), `middlewares/verifyToken.js`, dan `routes/mahasiswaRoutes.js` (memasang `verifyToken` pada route POST/PUT/DELETE). Model, controller/route Mahasiswa & Prodi, dan `errorHandler.js` sudah lengkap dari pertemuan sebelumnya.

**Prasyarat:** cluster MongoDB Atlas (paket gratis M0) beserta connection string-nya.

```bash
npm install
cp .env.example .env   # isi MONGODB_URI & JWT_SECRET (string acak yang panjang & rahasia)
npm start
```

Contoh alur pengujian dengan curl:

```bash
curl -X POST http://localhost:3000/auth/register -H "Content-Type: application/json" -d '{"username":"dosen1","password":"rahasia123"}'
curl -X POST http://localhost:3000/auth/login -H "Content-Type: application/json" -d '{"username":"dosen1","password":"rahasia123"}'
# salin token dari response login, lalu:
curl -X POST http://localhost:3000/mahasiswa -H "Content-Type: application/json" -H "Authorization: Bearer <token>" -d '{"nama":"Andi","nim":"2024001"}'
```

**Catatan pengujian:** Struktur kode identik untuk MongoDB lokal maupun MongoDB Atlas - cukup ganti nilai `MONGODB_URI` pada `.env`.

Bandingkan hasilnya dengan solusi referensi di repositori terpisah [SI0027-PAWII-Solution](https://github.com/nurrachmat-nr/SI0027-PAWII-Solution) setelah selesai.

## Kaitan dengan Tugas Project Mandiri

Folder ini adalah latihan pendamping di kelas menggunakan entitas contoh (`mahasiswa`, `prodi`, `user`), **bukan** jawaban dari Tugas Project Mandiri pada slide materi (menerapkan autentikasi JWT pada RESTful API **project akhir Anda sendiri**). Tugas tersebut dinilai secara terpisah.
