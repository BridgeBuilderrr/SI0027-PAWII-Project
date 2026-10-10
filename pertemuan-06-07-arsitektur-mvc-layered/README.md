# API Akademik - Express MVC Layered

Aplikasi backend sederhana berbasis Express.js untuk mengelola data akademik seperti mahasiswa, fakultas, prodi, dan dosen.

## 1. Clone repo

```bash
git clone <url-repository-anda>
cd KUIS1_2428240004
```

## 2. Install dependency

```bash
npm install
```

## 3. Jalankan aplikasi

```bash
npm start
```

Server akan berjalan di:

```text
http://localhost:3000
```

## 4. Endpoint yang tersedia

```text
GET    /mahasiswa
GET    /mahasiswa/:id
POST   /mahasiswa

GET    /fakultas
GET    /fakultas/:id
POST   /fakultas

GET    /prodi
GET    /prodi/:id
POST   /prodi

GET    /dosen
GET    /dosen/:id
POST   /dosen
```

## 5. Contoh testing dengan curl

```bash
curl http://localhost:3000/mahasiswa
curl http://localhost:3000/fakultas
curl http://localhost:3000/prodi
curl http://localhost:3000/dosen
```

Untuk menambahkan data baru:

```bash
curl -X POST http://localhost:3000/mahasiswa \
  -H "Content-Type: application/json" \
  -d '{"nama":"Budi","jurusan":"Teknik Informatika"}'
```

## 6. Struktur project

```text
KUIS1_2428240004/
├── app.js
├── package.json
├── README.md
├── controllers/
│   ├── mahasiswaController.js
│   ├── fakultasController.js
│   ├── prodiController.js
│   └── dosenController.js
├── models/
│   ├── mahasiswaModel.js
│   ├── fakultasModel.js
│   ├── prodiModel.js
│   └── dosenModel.js
├── routes/
│   ├── mahasiswaRoutes.js
│   ├── fakultasRoutes.js
│   ├── prodiRoutes.js
│   └── dosenRoutes.js
└── node_modules/
``
