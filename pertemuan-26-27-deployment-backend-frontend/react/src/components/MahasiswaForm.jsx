// Mini Project - Pertemuan 23-24-25: Controlled form dengan validasi sisi klien (sudah lengkap dari Pertemuan 21-22)
// onTambah kini memanggil API sungguhan lewat Axios di App.jsx.

import { useState } from "react";

function validate(form) {
  const errors = {};
  if (!form.nama.trim()) errors.nama = "Nama wajib diisi";
  if (!/^\d{7}$/.test(form.nim)) errors.nim = "NIM harus 7 digit angka";
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
    const validationErrors = validate(form);
    setErrors(validationErrors);
    setTouched({ nama: true, nim: true });
    if (Object.keys(validationErrors).length > 0) return;

    onTambah({ ...form });
    setForm({ nama: "", nim: "" });
    setTouched({});
    setErrors({});
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
