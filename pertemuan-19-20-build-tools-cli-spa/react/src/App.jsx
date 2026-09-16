// Mini Project - Pertemuan 19-20: menambahkan environment variable (VITE_API_BASE_URL)
// Component tree (sudah lengkap dari Pertemuan 17-18): App (state) -> PageHeader, SearchBar, MahasiswaList -> MahasiswaCard
// TODO 1: lengkapi bagian environment variable di bawah ini.

import { useState } from "react";
import "./App.css";
import PageHeader from "./components/PageHeader";
import SearchBar from "./components/SearchBar";
import MahasiswaList from "./components/MahasiswaList";

// TODO: baca environment variable VITE_API_BASE_URL lewat import.meta.env.VITE_API_BASE_URL
// const API_BASE_URL = ...

const DATA_MAHASISWA = [
  { id: 1, nama: "Andi", nim: "2024001" },
  { id: 2, nama: "Budi", nim: "2024002" },
  { id: 3, nama: "Citra", nim: "2024003" },
];

function App() {
  const [keyword, setKeyword] = useState("");

  const mahasiswaTersaring = DATA_MAHASISWA.filter((m) =>
    m.nama.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="app">
      <PageHeader judul="Daftar Mahasiswa" />
      <SearchBar keyword={keyword} onSearch={setKeyword} />
      <MahasiswaList mahasiswa={mahasiswaTersaring} />
      {/* TODO: tampilkan <footer className="env-footer">Terhubung ke: {API_BASE_URL}</footer> */}
    </div>
  );
}

export default App;
