// Mini Project - Pertemuan 19-20: Komponen anak, mengirim event ke induk lewat @Output() (sudah lengkap dari Pertemuan 17-18)

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  templateUrl: './search-bar.component.html',
})
export class SearchBarComponent {
  @Input() keyword = '';
  @Output() search = new EventEmitter<string>();

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.search.emit(value);
  }
}
