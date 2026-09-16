// Solusi Referensi - Pertemuan 17-18: Komponen anak yang mengirim event ke induk lewat callback prop

function SearchBar({ keyword, onSearch }) {
  return (
    <input
      className="search-bar"
      type="text"
      placeholder="Cari nama mahasiswa..."
      value={keyword}
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}

export default SearchBar;
