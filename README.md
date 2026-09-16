# SI0027-PAWII-Project - Mini Project

Repositori **mini-project** (starter kit latihan) pendamping mata kuliah **Pengembangan Aplikasi Web II**, Program Studi Sistem Informasi, Universitas Multi Data Palembang.

Repositori ini **bukan** kumpulan jawaban tugas. Setiap folder pertemuan berisi starter kit latihan singkat (berisi `// TODO` yang perlu dilengkapi mahasiswa) yang dikerjakan bersama di kelas, ditampilkan pada slide materi sebagai bahan praktik.

Solusi referensi dari setiap mini-project di sini tersedia pada repositori terpisah **[SI0027-PAWII-Solution](https://github.com/nurrachmat-nr/SI0027-PAWII-Solution)**. Solusi referensi tersebut **bukan jawaban Tugas Project Mandiri** yang dinilai pada RPS — tugas project mandiri dikumpulkan secara terpisah melalui LMS.

## Struktur Repositori

```
SI0027-PAWII-Project/
├── pertemuan-01-full-stack-arsitektur-decoupled/
├── pertemuan-02-uiux-figma-deployment-paas/
├── pertemuan-03-04-restful-api-expressjs/
├── ...
├── pertemuan-17-18-arsitektur-komponen-spa/
│   ├── react/
│   └── angular/
└── ...
```

Topik SPA (Pertemuan 17-28) disediakan dalam dua varian stack, masing-masing di subfolder `react/` dan `angular/`; Pertemuan 26-27 dan 28 juga menyertakan subfolder `backend/`.

## Peta Materi (mengikuti Tabel H - RPS PAW II)

| Pertemuan | Pokok Bahasan | Folder | Status |
|---|---|---|---|
| 1 | Full Stack Development & Arsitektur Aplikasi Web Decoupled | [`pertemuan-01-full-stack-arsitektur-decoupled`](pertemuan-01-full-stack-arsitektur-decoupled) | Tersedia |
| 2 | UI/UX Design (Figma) & Ekosistem Deployment Modern (PaaS) | [`pertemuan-02-uiux-figma-deployment-paas`](pertemuan-02-uiux-figma-deployment-paas) | Tersedia |
| 3, 4 | Membangun RESTful API dengan Express.js | [`pertemuan-03-04-restful-api-expressjs`](pertemuan-03-04-restful-api-expressjs) | Tersedia |
| 5 | Middleware & Konfigurasi Backend | [`pertemuan-05-middleware-konfigurasi-backend`](pertemuan-05-middleware-konfigurasi-backend) | Tersedia |
| 6, 7 | Arsitektur Backend Terstruktur (MVC/Layered) | [`pertemuan-06-07-arsitektur-mvc-layered`](pertemuan-06-07-arsitektur-mvc-layered) | Tersedia |
| 8 | Pengujian API dengan Postman Automation | [`pertemuan-08-pengujian-api-postman`](pertemuan-08-pengujian-api-postman) | Tersedia |
| 9, 10 | NoSQL Data Modeling (MongoDB, Mongoose & MongoDB Atlas) | [`pertemuan-09-10-nosql-data-modeling-mongodb`](pertemuan-09-10-nosql-data-modeling-mongodb) | Tersedia |
| 11, 12 | RESTful API CRUD untuk Data NoSQL | [`pertemuan-11-12-restful-api-crud-nosql`](pertemuan-11-12-restful-api-crud-nosql) | Tersedia |
| 13, 14 | Autentikasi Stateless dengan JWT & Keamanan API | [`pertemuan-13-14-autentikasi-jwt-keamanan-api`](pertemuan-13-14-autentikasi-jwt-keamanan-api) | Tersedia |
| 15, 16 | Ujian Tengah Semester (UTS) | - | - |
| 17, 18 | Arsitektur Komponen SPA Framework-Agnostik (React/MERN atau Angular Standalone) | [`pertemuan-17-18-arsitektur-komponen-spa`](pertemuan-17-18-arsitektur-komponen-spa) | Tersedia |
| 19, 20 | Build Tools/CLI Modern untuk Proyek SPA | [`pertemuan-19-20-build-tools-cli-spa`](pertemuan-19-20-build-tools-cli-spa) | Tersedia |
| 21, 22 | Form dan Validasi Sisi Klien pada SPA | [`pertemuan-21-22-form-validasi-spa`](pertemuan-21-22-form-validasi-spa) | Tersedia |
| 23, 24, 25 | Konsumsi API Asinkron (Axios/Fetch) & Autentikasi JWT dari SPA | [`pertemuan-23-24-25-konsumsi-api-asinkron-jwt-spa`](pertemuan-23-24-25-konsumsi-api-asinkron-jwt-spa) | Tersedia |
| 26, 27 | Deployment Modern: Backend (Render/Railway) & Frontend (Vercel/Netlify) | [`pertemuan-26-27-deployment-backend-frontend`](pertemuan-26-27-deployment-backend-frontend) | Tersedia |
| 28 | Integrasi Full Stack, Debugging Arsitektur Decoupled & Review Proyek | [`pertemuan-28-integrasi-fullstack-debugging-review`](pertemuan-28-integrasi-fullstack-debugging-review) | Tersedia |
| 29, 30 | Konsultasi dan Presentasi Proyek Akhir | `pertemuan-29-30-konsultasi-presentasi-proyek-akhir` | Direncanakan |
| 31 | Ujian Akhir Semester (UAS) - Presentasi Project | - | - |

> Catatan: topik SPA (Pertemuan 17-28) disediakan dalam dua varian stack: **React (MERN)** dan **Angular Standalone Components**, mengikuti opsi pada RPS.

## Cara Menjalankan Setiap Project

Setiap folder pertemuan umumnya berupa aplikasi Node.js/Express dan/atau frontend statis. Petunjuk detail tersedia di README masing-masing folder pertemuan. Pola umum:

```bash
cd <folder-pertemuan>
npm install
npm start
```

## Lisensi & Penggunaan

Kode pada repositori ini disediakan untuk keperluan pembelajaran mata kuliah Pengembangan Aplikasi Web II di Universitas Multi Data Palembang.
