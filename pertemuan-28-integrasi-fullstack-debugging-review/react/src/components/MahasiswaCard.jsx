// Solusi Referensi - Pertemuan 17-18: Komponen anak, menerima data lewat props (read-only)

function MahasiswaCard({ nama, nim }) {
  return (
    <div className="card">
      <h3>{nama}</h3>
      <p>NIM: {nim}</p>
    </div>
  );
}

export default MahasiswaCard;
