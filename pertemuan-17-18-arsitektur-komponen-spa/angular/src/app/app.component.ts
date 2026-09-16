// Mini Project - Pertemuan 17-18: Component tree
// AppComponent (shell, sudah lengkap) -> PageHeader, <router-outlet> -> DaftarMahasiswaPage/Tentang
// Fokuskan TODO pada DaftarMahasiswaPageComponent (src/app/pages/daftar-mahasiswa-page/).

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PageHeaderComponent } from './components/page-header/page-header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PageHeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
