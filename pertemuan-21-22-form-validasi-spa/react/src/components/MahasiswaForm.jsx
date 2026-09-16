// Mini Project - Pertemuan 21-22: Controlled form dengan validasi sisi klien
// TODO 1: lengkapi fungsi validate() dan handleSubmit() di bawah ini.

import { useState } from "react";

function validate(form) {
  const errors = {};
  // TODO: jika form.nama kosong (setelah di-trim), set errors.nama = 'Nama wajib diisi'
  // TODO: jika form.nim TIDAK cocok pola 7 digit angka (/^\d{7}$/), set errors.nim = 'NIM harus 7 digit angka'
  return errors;
}

function MahasiswaForm({ onTambah }) {
  const [form, setForm] = useState({ nama: "", nim: "" });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    setErrors(validate({ ...form }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: panggil validate(form), simpan hasilnya ke variabel & ke setErrors()
    // TODO: set touched jadi { nama: true, nim: true }
    // TODO: jika masih ada error (Object.keys(...).length > 0), hentikan dengan return

    // TODO: panggil onTambah({ id: Date.now(), ...form })
    // TODO: kosongkan kembali form, touched, dan errors
  }

  return (
    <form className="mahasiswa-form" onSubmit={handleSubmit} noValidate>
      <div className="field">
        <input
          name="nama"
          placeholder="Nama"
          value={form.nama}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.nama && errors.nama && <span className="error">{errors.nama}</span>}
      </div>

      <div className="field">
        <input
          name="nim"
          placeholder="NIM (7 digit)"
          value={form.nim}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {touched.nim && errors.nim && <span className="error">{errors.nim}</span>}
      </div>

      <button type="submit" disabled={Object.keys(validate(form)).length > 0}>
        Tambah
      </button>
    </form>
  );
}

export default MahasiswaForm;
