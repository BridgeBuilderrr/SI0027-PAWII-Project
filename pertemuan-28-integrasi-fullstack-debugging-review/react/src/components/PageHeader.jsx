// Solusi Referensi - Pertemuan 17-18: Komponen presentational sederhana (hanya menerima props)

import { Link } from "react-router-dom";

function PageHeader({ judul }) {
  return (
    <header className="page-header">
      <h1>{judul}</h1>
      <nav>
        <Link to="/">Daftar Mahasiswa</Link>
        {" | "}
        <Link to="/tentang">Tentang</Link>
      </nav>
    </header>
  );
}

export default PageHeader;
