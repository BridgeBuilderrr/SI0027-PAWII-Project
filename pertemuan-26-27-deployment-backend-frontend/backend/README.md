# Mini Project - Backend (Deployment)

Dipindahkan dari [`pertemuan-13-14-autentikasi-jwt-keamanan-api/mini-project`](../../pertemuan-13-14-autentikasi-jwt-keamanan-api/mini-project). Masih berisi `// TODO` pada `controllers/authController.js`, `middlewares/verifyToken.js`, dan `routes/mahasiswaRoutes.js` - lengkapi dahulu bila belum, lihat README Pertemuan 13-14.

Lihat README utama pada folder [`pertemuan-26-27-deployment-backend-frontend`](../README.md) untuk penjelasan lengkap deployment.

## Yang Berbeda dari Pertemuan 13-14

- **CORS dibatasi ke satu origin** lewat environment variable `FRONTEND_ORIGIN`.
- **`Procfile`** (`web: npm start`) ditambahkan sebagai referensi start command untuk Render/Railway.

Jalankan cepat secara lokal:

```bash
cp .env.example .env   # isi MONGODB_URI, JWT_SECRET & FRONTEND_ORIGIN
npm install
npm start
```
