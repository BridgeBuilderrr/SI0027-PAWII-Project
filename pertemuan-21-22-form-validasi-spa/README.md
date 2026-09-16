# Pertemuan 21-22 - Form dan Validasi Sisi Klien pada SPA

Mini-project pendamping untuk materi slide `Materi-Pertemuan-21-22-Form-Validasi-SPA.pptx`.

## Tujuan

Menambahkan form "Tambah Mahasiswa" bervalidasi pada aplikasi React & Angular dari Pertemuan 17-20: **controlled form** (React, `useState`) dan **Reactive Form** (Angular, `FormGroup`/`FormControl`/`Validators`), lengkap dengan pesan error kondisional dan pencegahan submit yang belum valid. Disediakan dalam **dua varian stack** - pilih salah satu sesuai stack project akhir Anda.

## Struktur

```
pertemuan-21-22-form-validasi-spa/
├── react/     # React (Vite) - berisi // TODO baru (validate() & handleSubmit())
└── angular/   # Angular Standalone - berisi // TODO baru (Validators & onSubmit())
```

Component tree bertambah satu komponen baru dari Pertemuan 17-20: `App`/`AppComponent` -> `PageHeader`, **`MahasiswaForm`** (baru), `SearchBar`, `MahasiswaList` -> `MahasiswaCard`. Mahasiswa baru dari form ditambahkan ke state/array yang sama yang dipakai `SearchBar`/`MahasiswaList`, sehingga langsung ikut tersaring pencarian.

## Aturan Validasi

| Field | Aturan | React | Angular |
|---|---|---|---|
| Nama | Wajib diisi | `if (!form.nama.trim())` | `Validators.required` |
| NIM | Wajib diisi & harus 7 digit angka | `/^\d{7}$/.test(form.nim)` | `Validators.required`, `Validators.pattern(/^\d{7}$/)` |

Pesan error hanya tampil setelah field disentuh (blur/touched), dan tombol "Tambah" dinonaktifkan selama form belum valid.

## Mengerjakan

Lengkapi setiap `// TODO` (React: `src/components/MahasiswaForm.jsx` bagian `validate()` & `handleSubmit()`; Angular: `src/app/components/mahasiswa-form/mahasiswa-form.component.ts` bagian `Validators` & `onSubmit()`). Seluruh komponen dari Pertemuan 17-20 sudah lengkap sebagai bekal.

**React (Vite):**

```bash
cd react
cp .env.example .env
npm install
npm run dev
```

**Angular Standalone:**

```bash
cd angular
npm install
npm start
```

Bandingkan hasilnya dengan solusi referensi pada stack yang sama di repositori terpisah [SI0027-PAWII-Solution](https://github.com/nurrachmat-nr/SI0027-PAWII-Solution) setelah selesai.

## Kaitan dengan Tugas Project Mandiri

Folder ini adalah latihan pendamping di kelas menggunakan data statis contoh, **bukan** jawaban dari Tugas Project Mandiri pada slide materi (membuat form bervalidasi untuk **project akhir Anda sendiri**). Tugas tersebut dinilai secara terpisah.
