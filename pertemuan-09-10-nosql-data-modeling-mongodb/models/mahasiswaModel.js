// Mini Project - Pertemuan 9-10: Model Mahasiswa
// TODO 1: lengkapi Schema di bawah ini.

const mongoose = require("mongoose");

const alamatSchema = new mongoose.Schema(
  {
    jalan: String,
    kota: String,
  },
  { _id: false }
);

const mahasiswaSchema = new mongoose.Schema({
  // TODO: tambahkan field nama (String, required)
  // TODO: tambahkan field nim (String, required, unique)
  // TODO: tambahkan field alamat bertipe alamatSchema (embedding)
  // TODO: tambahkan field prodiId yang mereferensi model 'Prodi' (referencing)
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Mahasiswa", mahasiswaSchema);
