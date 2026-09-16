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

## Component Tree (Identik pada Kedua Stack)

```
App / AppComponent (menyimpan state "keyword")
├── PageHeader           - menampilkan judul halaman (props: judul)
├── SearchBar            - input pencarian (props: keyword, onSearch/kotakPencarianBerubah)
└── MahasiswaList        - merender daftar (props: mahasiswa)
    └── MahasiswaCard    - menampilkan satu data (props: nama, nim)
```

Data mengalir satu arah (unidirectional): `App` menyimpan data & kata kunci pencarian, meneruskannya lewat props/`@Input()` ke komponen anak. `SearchBar` melaporkan balik perubahan lewat callback prop (React) / `@Output()` event (Angular) - tidak pernah mengubah data induk secara langsung.

## Mengerjakan

Lengkapi setiap `// TODO` pada komponen `MahasiswaCard`, `SearchBar`, `MahasiswaList`, dan komponen akar (`App.jsx` / `AppComponent`). `PageHeader` sudah lengkap sebagai contoh komponen presentational sederhana.

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

Kedua project menampilkan halaman "Daftar Mahasiswa" dengan data statis (3 mahasiswa) dan kotak pencarian yang menyaring daftar secara langsung (belum terhubung ke API - konsumsi API dibahas pada Pertemuan 23-25).

Bandingkan hasilnya dengan solusi referensi pada stack yang sama di repositori terpisah [SI0027-PAWII-Solution](https://github.com/nurrachmat-nr/SI0027-PAWII-Solution) setelah selesai.

## Kaitan dengan Tugas Project Mandiri

Folder ini adalah latihan pendamping di kelas menggunakan data statis contoh, **bukan** jawaban dari Tugas Project Mandiri pada slide materi (merancang & mengimplementasikan component tree untuk **project akhir Anda sendiri**, dengan stack pilihan React atau Angular). Tugas tersebut dinilai secara terpisah.
