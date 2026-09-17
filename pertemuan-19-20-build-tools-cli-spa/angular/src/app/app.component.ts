// Mini Project - Pertemuan 19-20: menambahkan environment variable (apiBaseUrl)
// Component tree (sudah lengkap dari Pertemuan 17-18): AppComponent (shell) -> PageHeader, <router-outlet>
// Routing ("/" & "/tentang") sudah lengkap - fokuskan TODO pada environment variable di halaman Daftar Mahasiswa.

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
