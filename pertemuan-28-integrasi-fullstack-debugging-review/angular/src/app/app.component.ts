// Mini Project - Pertemuan 23-24-25: Konsumsi API sungguhan (HttpClient) & Autentikasi JWT
// Component tree (sudah lengkap dari Pertemuan 17-22): AppComponent (shell) -> PageHeader, <router-outlet>
// Routing ("/" & "/tentang") sudah lengkap.
// TODO 5: lengkapi ngOnInit() (GET) dan onTambah() (POST) di halaman Daftar Mahasiswa.

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
