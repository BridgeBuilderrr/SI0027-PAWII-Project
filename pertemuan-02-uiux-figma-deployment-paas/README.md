# Pertemuan 2 - UI/UX Design (Figma) & Ekosistem Deployment Modern (PaaS)

Mini-project pendamping untuk materi slide `Materi-Pertemuan-02-UIUX-Figma-Deployment-PaaS.pptx`.

## Tujuan

- Berlatih menyusun wireframe, mockup, dan prototype menggunakan Figma.
- Mempraktikkan alur deployment modern: menerbitkan halaman statis ke platform PaaS (Vercel/Netlify).

## Struktur

```
pertemuan-02-uiux-figma-deployment-paas/
├── figma-checklist.md   # panduan praktik Figma (TODO checklist)
├── DEPLOY.md            # panduan deployment ke Vercel/Netlify (TODO checklist)
└── static-site/         # starter halaman statis (CSS belum lengkap)
```

## Catatan Penting

Figma adalah alat desain berbasis web sehingga **tidak dapat disertakan sebagai berkas** dalam repositori ini. Bagian praktik Figma dipandu melalui `figma-checklist.md`.

## Mengerjakan

1. Ikuti `figma-checklist.md` untuk praktik wireframe → mockup → prototype di Figma.
2. Lengkapi `TODO` pada `static-site/style.css` agar tampilan sesuai wireframe.
3. Ikuti `DEPLOY.md` untuk menerbitkan `static-site/` ke Vercel atau Netlify.

```bash
cd static-site
npx http-server -p 5500
# buka http://localhost:5500
```

Referensi hasil praktik (`figma-reference.md`) dan halaman statis lengkap tersedia di repositori terpisah [SI0027-PAWII-Solution](https://github.com/nurrachmat-nr/SI0027-PAWII-Solution).

## Kaitan dengan Tugas Project Mandiri

Folder ini adalah latihan pendamping di kelas, **bukan** jawaban dari Tugas Project Mandiri pada slide materi (wireframe/prototype & deployment untuk ide project akhir Anda sendiri). Tugas tersebut dikumpulkan secara terpisah melalui LMS.
