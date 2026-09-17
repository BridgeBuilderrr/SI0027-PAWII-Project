// Mini Project - Pertemuan 21-22: menambahkan form bervalidasi (MahasiswaForm)
// Component tree (sudah lengkap dari Pertemuan 17-18/19-20): AppComponent (shell) -> PageHeader, <router-outlet>
// Routing ("/" & "/tentang") sudah lengkap - fokuskan TODO pada `mahasiswa-form.component.ts`.

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
