// Mini Project - Pertemuan 17-18: Routing dasar (sudah lengkap)

import { Routes } from '@angular/router';
import { DaftarMahasiswaPageComponent } from './pages/daftar-mahasiswa-page/daftar-mahasiswa-page.component';
import { TentangComponent } from './pages/tentang/tentang.component';

export const routes: Routes = [
  { path: '', component: DaftarMahasiswaPageComponent },
  { path: 'tentang', component: TentangComponent },
];
