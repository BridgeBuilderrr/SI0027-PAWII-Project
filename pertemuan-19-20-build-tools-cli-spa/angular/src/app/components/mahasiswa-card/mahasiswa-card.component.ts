// Mini Project - Pertemuan 19-20: Komponen anak, menerima data lewat @Input (sudah lengkap dari Pertemuan 17-18)

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mahasiswa-card',
  standalone: true,
  templateUrl: './mahasiswa-card.component.html',
})
export class MahasiswaCardComponent {
  @Input() nama!: string;
  @Input() nim!: string;
}
