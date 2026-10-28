# Laporan Praktikum - RESTful API NoSQL untuk Ensiklopedia Bahasa Pemrograman

## 1. Data Diri
- Nama: [isi nama Anda]
- NIM: [isi NIM Anda]
- Kelas: [isi kelas Anda]
- Mata Kuliah: Pemrograman Web Lanjut / PAW II
- Dosen Pengampu: [isi nama dosen]
- Tanggal Praktikum: 23 Oktober 2026

## 2. Judul Praktikum
Pengembangan RESTful API NoSQL dengan MongoDB dan Mongoose untuk data ensiklopedia bahasa pemrograman.

## 3. Tujuan
1. Menyesuaikan project akhir pada folder `pertemuan-09-10` dengan tema ensiklopedia bahasa pemrograman.
2. Mengimplementasikan operasi CRUD pada data bahasa pemrograman berbasis MongoDB.
3. Menambahkan fitur filtering, pagination, sorting, dan projection agar API siap menangani data dalam jumlah besar.
4. Menerapkan error handling terpusat menggunakan middleware Express.

## 4. Landasan Teori
MongoDB adalah database NoSQL yang menyimpan data dalam format dokumen BSON. Mongoose digunakan sebagai ODM untuk memudahkan validasi, query, dan pengelolaan model data. Dalam pembangunan RESTful API, fitur seperti query filtering, pagination, sorting, dan projection sangat penting agar API tetap efisien saat volume data bertambah.

## 5. Alat dan Bahan
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Postman / API Client
- VS Code

## 6. Desain API
### Endpoint utama
- `GET /api/bahasa-program` - menampilkan daftar bahasa program
- `GET /api/bahasa-program/:id` - menampilkan satu data
- `POST /api/bahasa-program` - menambah data
- `PUT /api/bahasa-program/:id` - mengubah data
- `DELETE /api/bahasa-program/:id` - menghapus data

### Fitur tambahan
- Filtering: `?kategori=Backend&q=python`
- Pagination: `?page=2&limit=5`
- Sorting: `?sort=-tahunRilis,nama`
- Projection: `?fields=nama,kategori,tahunRilis`

## 7. Implementasi
### a. Model data
Model `BahasaProgram` dibuat dengan field utama:
- `nama`
- `kategori`
- `dibuatOleh`
- `tahunRilis`
- `level`
- `deskripsi`
- `fiturUtama`
- `popularitas`
- `createdAt`

### b. Controller
Controller dibuat untuk menangani logic CRUD serta query param filtering, sorting, dan pagination.

### c. Middleware error handler
Semua error API ditangani secara terpusat melalui `middlewares/errorHandler.js` agar respons lebih rapi dan konsisten.

## 8. Contoh Request
### 1. Filtering dan pencarian
`GET /api/bahasa-program?q=python&kategori=Backend`

### 2. Pagination dengan batas maksimal
`GET /api/bahasa-program?page=1&limit=5`

### 3. Sorting dan projection
`GET /api/bahasa-program?sort=-tahunRilis&fields=nama,tahunRilis,kategori`

### 4. Menambah data baru
```json
{
  "nama": "Go",
  "kategori": "Backend",
  "dibuatOleh": "Robert Griesemer",
  "tahunRilis": 2009,
  "level": "Menengah - Mahir",
  "deskripsi": "Bahasa pemrograman yang dirancang untuk performa tinggi dan komputasi terdistribusi.",
  "fiturUtama": ["Concurrency", "Garbage Collection", "Kinerja tinggi"],
  "popularitas": 90
}
```

## 9. Hasil dan Pembahasan
Pada praktikum ini, API berhasil dibuat dengan struktur RESTful yang konsisten. Fitur filtering memungkinkan pencarian data berdasarkan kata kunci dan atribut tertentu. Pagination mencegah pengambilan seluruh record sekaligus sehingga lebih efisien untuk dataset besar. Sorting dan projection mempercepat respons dan mengurangi beban transfer data. Error handling terpusat memastikan respons error konsisten untuk validasi, resource tidak ditemukan, atau format data yang salah.

## 10. Kesimpulan
API ensiklopedia bahasa pemrograman yang dibuat pada folder `pertemuan-09-10` sudah memenuhi kebutuhan praktikum, yaitu CRUD, filtering, pagination, sorting, projection, serta error handling terpusat. Dengan pendekatan ini, aplikasi siap dikembangkan untuk data dalam jumlah besar dan dapat diterapkan pada project akhir mahasiswa.

## 11. Lampiran
- Struktur proyek utama:
  - `models/bahasaProgramModel.js`
  - `controllers/bahasaProgramController.js`
  - `routes/bahasaProgramRoutes.js`
  - `middlewares/errorHandler.js`
  - `app.js`
