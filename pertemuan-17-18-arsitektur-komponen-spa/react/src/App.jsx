// Mini Project - Pertemuan 17-18: Component tree
// TODO 4: lengkapi state & susun component tree App -> PageHeader, SearchBar, MahasiswaList.

import { useState } from "react";
import "./App.css";
import PageHeader from "./components/PageHeader";
import SearchBar from "./components/SearchBar";
import MahasiswaList from "./components/MahasiswaList";

const DATA_MAHASISWA = [
  { id: 1, nama: "Andi", nim: "2024001" },
  { id: 2, nama: "Budi", nim: "2024002" },
  { id: 3, nama: "Citra", nim: "2024003" },
];

function App() {
  // TODO: buat state keyword dengan useState('')

  // TODO: hitung mahasiswaTersaring - filter DATA_MAHASISWA berdasarkan
  // apakah m.nama.toLowerCase() mengandung keyword.toLowerCase()

  return (
    <div className="app">
      <PageHeader judul="Daftar Mahasiswa" />
      {/* TODO: render <SearchBar keyword={keyword} onSearch={setKeyword} /> */}
      {/* TODO: render <MahasiswaList mahasiswa={mahasiswaTersaring} /> */}
    </div>
  );
}

export default App;
