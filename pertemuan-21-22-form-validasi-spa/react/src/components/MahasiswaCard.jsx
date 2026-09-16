// Mini Project - Pertemuan 21-22: Komponen anak, menerima data lewat props (sudah lengkap dari Pertemuan 17-18)

function MahasiswaCard({ nama, nim }) {
  return (
    <div className="card">
      <h3>{nama}</h3>
      <p>NIM: {nim}</p>
    </div>
  );
}

export default MahasiswaCard;
