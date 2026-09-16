// Solusi Referensi - Pertemuan 17-18: Komponen presentational sederhana (hanya menerima props)

function PageHeader({ judul }) {
  return (
    <header className="page-header">
      <h1>{judul}</h1>
    </header>
  );
}

export default PageHeader;
