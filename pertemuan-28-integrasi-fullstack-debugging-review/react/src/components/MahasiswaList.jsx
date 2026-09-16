// Solusi Referensi - Pertemuan 17-18: Komponen induk, mengelola data & merender banyak MahasiswaCard
// (Pertemuan 23-24-25: key memakai _id dari MongoDB, bukan lagi id lokal)

import MahasiswaCard from "./MahasiswaCard";

function MahasiswaList({ mahasiswa }) {
  if (mahasiswa.length === 0) {
    return <p className="empty">Tidak ada mahasiswa yang cocok.</p>;
  }

  return (
    <div className="mahasiswa-list">
      {mahasiswa.map((m) => (
        <MahasiswaCard key={m._id} nama={m.nama} nim={m.nim} />
      ))}
    </div>
  );
}

export default MahasiswaList;
