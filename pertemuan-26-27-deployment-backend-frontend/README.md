# Pertemuan 26-27 - Deployment Modern: Backend & Frontend

Mini-project pendamping untuk materi slide `Materi-Pertemuan-26-27-Deployment-Backend-Frontend.pptx`.

## Tujuan

Menyiapkan konfigurasi deployment untuk backend (Render/Railway) dan frontend SPA (Vercel/Netlify), sehingga aplikasi Mahasiswa dari Pertemuan 13-25 dapat diakses lewat domain publik, bukan hanya localhost. Disediakan dalam **dua varian stack frontend** - pilih salah satu sesuai stack project akhir Anda.

## Berbeda dari Pertemuan Sebelumnya

Pertemuan ini **tidak menambahkan fitur aplikasi baru** - kode aplikasi (backend & frontend) di sini identik dengan Pertemuan 13-14/23-24-25, ditambah berkas konfigurasi deployment. "Latihan" pertemuan ini adalah proses deployment itu sendiri di platform hosting sungguhan (membuat akun, mengisi environment variable, klik deploy) - bukan sesuatu yang dapat disimulasikan di lingkungan pengembangan ini.

## Struktur

```
pertemuan-26-27-deployment-backend-frontend/
├── backend/    # Dipindahkan dari Pertemuan 13-14 + FRONTEND_ORIGIN + Procfile
├── react/      # React (Vite) + vercel.json + netlify.toml
└── angular/    # Angular Standalone + vercel.json + netlify.toml
```

**Catatan penting:** `backend/` adalah salinan mandiri (bukan referensi) dari `pertemuan-13-14-autentikasi-jwt-keamanan-api/`. Kode aplikasinya (routes/controllers/models/middlewares) tidak diubah sama sekali dari Pertemuan 13-14 - folder Pertemuan 13-14 itu sendiri tetap seperti aslinya, tidak disentuh. Konfigurasi deployment (CORS dari `FRONTEND_ORIGIN` & `Procfile`) hanya diterapkan pada salinan di folder ini.

## Pembaruan pada `backend/` (Dibandingkan Pertemuan 13-14)

- **CORS dibatasi ke satu origin** lewat environment variable `FRONTEND_ORIGIN` (`cors({ origin: process.env.FRONTEND_ORIGIN })`), bukan lagi terbuka untuk semua origin - sesuai praktik keamanan production.
- **`Procfile`** (`web: npm start`) ditambahkan sebagai referensi start command untuk Render/Railway.

## Konfigurasi Deployment Frontend

| Stack | Build Command | Output Directory | Berkas Konfigurasi |
|---|---|---|---|
| React (Vite) | `npm run build` | `dist` | `vercel.json`, `netlify.toml` |
| Angular | `npm run build` | `dist/<nama-project>/browser` | `vercel.json`, `netlify.toml` |

Kedua berkas konfigurasi berisi aturan rewrite/redirect agar routing sisi klien (SPA) tidak menghasilkan 404 saat halaman di-refresh pada rute selain `/`.

## Langkah Deployment (Dikerjakan di Platform Sungguhan)

**Backend (Render/Railway):**
1. Hubungkan repository ke Render/Railway, pilih folder `backend` (folder ini, bukan Pertemuan 13-14).
2. Build Command: `npm install`, Start Command: `npm start`.
3. Isi environment variable: `MONGODB_URI` (MongoDB Atlas), `JWT_SECRET`, `FRONTEND_ORIGIN` (isi setelah frontend di-deploy).

**Frontend (Vercel/Netlify):**
1. Hubungkan repository, pilih folder `react` atau `angular` sesuai stack Anda.
2. Isi environment variable build-time: `VITE_API_BASE_URL` (React) atau ubah `environment.ts` (Angular) ke alamat backend dari langkah di atas.
3. Setelah frontend ter-deploy, salin domainnya (mis. `https://nama-project.vercel.app`) ke `FRONTEND_ORIGIN` pada backend, lalu redeploy backend.

Solusi referensi lengkap tersedia di repositori terpisah [SI0027-PAWII-Solution](https://github.com/nurrachmat-nr/SI0027-PAWII-Solution).

## Kaitan dengan Tugas Project Mandiri

Folder ini adalah rujukan konfigurasi memakai entitas contoh (`mahasiswa`), **bukan** jawaban dari Tugas Project Mandiri pada slide materi (men-deploy **project akhir Anda sendiri** ke domain publik). Tugas tersebut dinilai secara terpisah, dan wajib menyertakan tautan (URL) production yang benar-benar dapat diakses.
