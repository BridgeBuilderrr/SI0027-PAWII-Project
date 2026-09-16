// Mini Project - Pertemuan 21-22: Komponen induk, merender banyak MahasiswaCard (sudah lengkap dari Pertemuan 17-18)

import MahasiswaCard from "./MahasiswaCard";

function MahasiswaList({ mahasiswa }) {
  if (mahasiswa.length === 0) {
    return <p className="empty">Tidak ada mahasiswa yang cocok.</p>;
  }

  return (
    <div className="mahasiswa-list">
      {mahasiswa.map((m) => (
        <MahasiswaCard key={m.id} nama={m.nama} nim={m.nim} />
      ))}
    </div>
  );
}

export default MahasiswaList;
