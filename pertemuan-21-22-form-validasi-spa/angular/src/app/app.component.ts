// Mini Project - Pertemuan 21-22: menambahkan form bervalidasi (MahasiswaForm)
// Component tree (sudah lengkap dari Pertemuan 17-18/19-20): AppComponent (state) -> PageHeader, SearchBar, MahasiswaForm, MahasiswaList -> MahasiswaCard

import { Component } from '@angular/core';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { MahasiswaFormComponent } from './components/mahasiswa-form/mahasiswa-form.component';
import { MahasiswaListComponent } from './components/mahasiswa-list/mahasiswa-list.component';
import { Mahasiswa } from './mahasiswa.model';
import { environment } from '../environments/environment';

const DATA_AWAL: Mahasiswa[] = [
  { id: 1, nama: 'Andi', nim: '2024001' },
  { id: 2, nama: 'Budi', nim: '2024002' },
  { id: 3, nama: 'Citra', nim: '2024003' },
];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PageHeaderComponent, SearchBarComponent, MahasiswaFormComponent, MahasiswaListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  keyword = '';
  apiBaseUrl = environment.apiBaseUrl;
  mahasiswa: Mahasiswa[] = DATA_AWAL;

  get mahasiswaTersaring(): Mahasiswa[] {
    return this.mahasiswa.filter((m) =>
      m.nama.toLowerCase().includes(this.keyword.toLowerCase())
    );
  }

  onSearch(keyword: string) {
    this.keyword = keyword;
  }

  onTambah(mahasiswaBaru: { nama: string; nim: string }) {
    this.mahasiswa = [...this.mahasiswa, { id: Date.now(), ...mahasiswaBaru }];
  }
}
