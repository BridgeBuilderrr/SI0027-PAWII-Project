# Pertemuan 28 - Integrasi Full Stack, Debugging & Review Proyek

Mini-project pendamping untuk materi slide `Materi-Pertemuan-28-Integrasi-Fullstack-Debugging-Review.pptx`.

## Tujuan

Berlatih menelusuri dan memperbaiki bug pada aplikasi full stack berarsitektur decoupled (frontend SPA <-> backend API <-> database), menggunakan aplikasi Mahasiswa yang sama dari Pertemuan 13-27. Disediakan dalam **dua varian stack frontend** - pilih salah satu sesuai stack project akhir Anda.

## Berbeda dari Pertemuan Sebelumnya

Pertemuan ini **tidak menambahkan fitur aplikasi baru**. Sebaliknya, kode di folder ini adalah salinan kode yang sudah lengkap dan pernah berjalan normal (dari Pertemuan 26-27), yang **sengaja disisipi bug** tanpa komentar atau penanda `// TODO` apa pun. Latihannya bukan melengkapi kode, melainkan **menemukan sendiri** kenapa aplikasi yang "seharusnya sudah selesai" ini tidak berjalan sebagaimana mestinya - persis seperti proses debugging pada aplikasi sungguhan.

## Struktur

```
pertemuan-28-integrasi-fullstack-debugging-review/
├── backend/    # Disalin dari Pertemuan 26-27 - berisi bug tersembunyi
├── react/      # React (Vite) - berisi bug tersembunyi
└── angular/    # Angular Standalone - berisi bug tersembunyi
```

**Catatan penting:** folder ini adalah salinan mandiri dari `pertemuan-26-27-deployment-backend-frontend/`, bukan referensi langsung - folder Pertemuan 26-27 itu sendiri tidak disentuh. `backend/` dipakai bersama oleh kedua varian frontend (satu backend, pilih salah satu frontend sesuai stack Anda).

## Cara Berlatih

1. Jalankan `backend/` (lihat README di dalamnya untuk konfigurasi `.env`).
2. Jalankan `react/` **atau** `angular/` (pilih salah satu, sesuai stack Anda).
3. Coba gunakan aplikasi: muat daftar mahasiswa, login, tambah data mahasiswa baru.
4. Ikuti metodologi debugging dari slide materi (reproduksi -> isolasi lapisan -> telusuri akar masalah -> verifikasi perbaikan) memakai Network tab, Console, log terminal backend, dan curl untuk menemukan **3 bug** yang tersebar di lapisan berbeda.
5. Perbaiki langsung pada kode Anda. Jika ragu, bandingkan dengan solusi referensi di [SI0027-PAWII-Solution](https://github.com/nurrachmat-nr/SI0027-PAWII-Solution) pada stack yang sama - tapi usahakan menemukan bug sendiri lebih dulu.
6. Setelah selesai (atau benar-benar mentok), baca `DEBUGGING.md` di repositori [SI0027-PAWII-Solution](https://github.com/nurrachmat-nr/SI0027-PAWII-Solution) untuk mencocokkan hasil temuan Anda (kunci jawaban: gejala, akar masalah & perbaikan tiap bug).

## Kaitan dengan Tugas Project Mandiri

Folder ini adalah latihan pendamping di kelas menggunakan entitas contoh (`mahasiswa`), **bukan** jawaban dari Tugas Project Mandiri pada slide materi (melakukan review arsitektur & debugging pada **project akhir Anda sendiri**). Tugas tersebut dinilai secara terpisah, dan tidak memiliki daftar bug yang sudah diketahui sebelumnya - Anda perlu menerapkan checklist review dan metodologi debugging yang sama untuk menemukan masalah nyata pada project Anda.
