// Mini Project - Pertemuan 23-24-25: Komponen anak yang mengirim event ke induk (sudah lengkap dari Pertemuan 17-18)

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
