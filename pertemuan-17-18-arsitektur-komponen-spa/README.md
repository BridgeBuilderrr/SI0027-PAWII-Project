# Pertemuan 17-18 - Arsitektur Komponen SPA (React & Angular)

Mini-project pendamping untuk materi slide `Materi-Pertemuan-17-18-Arsitektur-Komponen-SPA.pptx`.

## Tujuan

Membangun UI sebagai Single Page Application (SPA) yang disusun dari komponen-komponen kecil (component tree), dengan **props** sebagai data masuk dan **state** sebagai data internal. Disediakan dalam **dua varian stack** - pilih salah satu sesuai stack project akhir Anda.

## Struktur

```
pertemuan-17-18-arsitektur-komponen-spa/
├── react/     # React (Vite) - berisi // TODO
└── angular/   # Angular Standalone - berisi // TODO
```

## Component Tree & Routing (Identik pada Kedua Stack)

```
App / AppComponent (shell - menampilkan PageHeader & <router-outlet>)
├── PageHeader                 - judul halaman + navigasi ("/" dan "/tentang")
└── <Routes>/<router-outlet>
    ├── "/"        -> DaftarMahasiswaPage (menyimpan state "keyword")
    │                 ├── SearchBar        - input pencarian (props: keyword, onSearch/kotakPencarianBerubah)
    │                 └── MahasiswaList    - merender daftar (props: mahasiswa)
    │                     └── MahasiswaCard - menampilkan satu data (props: nama, nim)
    └── "/tentang" -> Tentang / TentangComponent (halaman statis)
```

Data mengalir satu arah (unidirectional): `DaftarMahasiswaPage` menyimpan data & kata kunci pencarian, meneruskannya lewat props/`@Input()` ke komponen anak. `SearchBar` melaporkan balik perubahan lewat callback prop (React) / `@Output()` event (Angular) - tidak pernah mengubah data induk secara langsung.

Routing memakai **react-router-dom** (React) dan **@angular/router**, bawaan Angular CLI (Angular) - lihat `src/main.jsx`/`src/App.jsx` (React) atau `src/app/app.routes.ts`/`src/app/app.config.ts` (Angular).

## Mengerjakan

Lengkapi setiap `// TODO` pada komponen `MahasiswaCard`, `SearchBar`, `MahasiswaList`, dan `DaftarMahasiswaPage` (`src/App.jsx` bagian `DaftarMahasiswaPage` / `src/app/pages/daftar-mahasiswa-page/`). `PageHeader`, `Tentang`/`TentangComponent`, serta seluruh konfigurasi routing (`app.routes.ts`/`app.config.ts`, `BrowserRouter` pada `main.jsx`) sudah lengkap - fokus TODO pada component tree props/state seperti pertemuan ini dirancang.

**React (Vite):**

```bash
cd react
npm install
npm run dev
```

**Angular Standalone:**

```bash
cd angular
npm install
npm start
```

Kedua project menampilkan halaman "Daftar Mahasiswa" (data statis, 3 mahasiswa, kotak pencarian menyaring daftar secara langsung - belum terhubung ke API, konsumsi API dibahas pada Pertemuan 23-25) dan halaman kedua "Tentang" yang dapat diakses lewat tautan navigasi pada `PageHeader`, mendemonstrasikan routing dasar.

Bandingkan hasilnya dengan solusi referensi pada stack yang sama di repositori terpisah [SI0027-PAWII-Solution](https://github.com/nurrachmat-nr/SI0027-PAWII-Solution) setelah selesai.

## Kaitan dengan Tugas Project Mandiri

Folder ini adalah latihan pendamping di kelas menggunakan data statis contoh, **bukan** jawaban dari Tugas Project Mandiri pada slide materi (merancang & mengimplementasikan component tree untuk **project akhir Anda sendiri**, dengan stack pilihan React atau Angular). Tugas tersebut dinilai secara terpisah.
