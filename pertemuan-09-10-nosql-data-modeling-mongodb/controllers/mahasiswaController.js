// Mini Project - Pertemuan 9-10: Controller Mahasiswa
// TODO 2: lengkapi setiap handler agar memanggil Model Mongoose yang sesuai.

const Mahasiswa = require("../models/mahasiswaModel");

exports.getAll = async (req, res) => {
  // TODO: ambil seluruh data dengan Mahasiswa.find(), sertakan .populate('prodiId')
  // lalu kirim sebagai JSON
};

exports.getById = async (req, res) => {
  // TODO: ambil satu data dengan Mahasiswa.findById(req.params.id).populate('prodiId')
  // kirim 404 dengan { message: 'Tidak ditemukan' } jika tidak ada
};

exports.create = async (req, res) => {
  // TODO: buat data baru dengan Mahasiswa.create(req.body), bungkus try/catch
  // kirim response dengan status 201, atau 400 jika validasi gagal
};

exports.update = async (req, res) => {
  // TODO: gunakan Mahasiswa.findByIdAndUpdate(req.params.id, req.body,
  // { new: true, runValidators: true }), bungkus try/catch
};

exports.remove = async (req, res) => {
  // TODO: gunakan Mahasiswa.findByIdAndDelete(req.params.id),
  // kirim status 204 jika berhasil, 404 jika tidak ditemukan
};
