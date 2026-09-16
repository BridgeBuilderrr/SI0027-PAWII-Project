# Mini Project - Backend (Integrasi Full Stack & Debugging)

Disalin dari [`pertemuan-26-27-deployment-backend-frontend/backend/project-solution`](../../../pertemuan-26-27-deployment-backend-frontend/backend/project-solution) dan sengaja **disisipi bug**. Tidak ada `// TODO` atau komentar penanda - tugas Anda adalah menemukan dan memperbaiki bug tersebut sendiri lewat proses debugging, bukan melengkapi kode yang belum selesai.

Lihat README utama pada folder [`pertemuan-28-integrasi-fullstack-debugging-review`](../README.md) untuk penjelasan skenario debugging selengkapnya, dan `DEBUGGING.md` di root folder tersebut **hanya setelah** Anda selesai mencoba sendiri.

Jalankan cepat secara lokal:

```bash
cp .env.example .env   # isi MONGODB_URI, JWT_SECRET; FRONTEND_ORIGIN default cocok untuk React (Vite, port 5173)
npm install
npm start
```

**Catatan:** jika Anda menguji dengan frontend Angular (`ng serve`, port default 4200), ubah `FRONTEND_ORIGIN` pada `.env` menjadi `http://localhost:4200` sebelum menjalankan `npm start`.
