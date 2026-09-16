// Mini Project - Pertemuan 23-24-25: Konsumsi API sungguhan (HttpClient) & Autentikasi JWT
// Component tree (sudah lengkap dari Pertemuan 17-22): AppComponent (state) -> PageHeader, LoginForm|MahasiswaForm, SearchBar, MahasiswaList -> MahasiswaCard
// TODO 5: lengkapi ngOnInit() (GET) dan onTambah() (POST) di bawah ini.

import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MahasiswaFormComponent } from './components/mahasiswa-form/mahasiswa-form.component';
import { MahasiswaListComponent } from './components/mahasiswa-list/mahasiswa-list.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { MahasiswaService } from './services/mahasiswa.service';
import { AuthService } from './services/auth.service';
import { Mahasiswa } from './mahasiswa.model';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    PageHeaderComponent,
    SearchBarComponent,
    MahasiswaFormComponent,
    MahasiswaListComponent,
    LoginFormComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  private mahasiswaService = inject(MahasiswaService);
  private authService = inject(AuthService);

  apiBaseUrl = environment.apiBaseUrl;
  keyword = '';
  mahasiswa: Mahasiswa[] = [];
  loading = true;
  error = '';
  isLoggedIn = this.authService.isLoggedIn();

  ngOnInit() {
    // TODO: panggil this.mahasiswaService.getAll().subscribe({
    //   next: (res) => { this.mahasiswa = res.data; this.loading = false; },
    //   error: () => { this.error = 'Gagal memuat data mahasiswa'; this.loading = false; },
    // });
  }

  get mahasiswaTersaring(): Mahasiswa[] {
    return this.mahasiswa.filter((m) =>
      m.nama.toLowerCase().includes(this.keyword.toLowerCase())
    );
  }

  onSearch(keyword: string) {
    this.keyword = keyword;
  }

  onTambah(mahasiswaBaru: { nama: string; nim: string }) {
    // TODO: panggil this.mahasiswaService.create(mahasiswaBaru).subscribe({
    //   next: (res) => { this.mahasiswa = [...this.mahasiswa, res]; },
    //   error: () => { alert('Gagal menambah data (pastikan Anda sudah login)'); },
    // });
  }

  onLogout() {
    this.authService.logout();
    this.isLoggedIn = false;
  }
}
