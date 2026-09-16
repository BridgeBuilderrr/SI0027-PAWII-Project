// Solusi Referensi - Pertemuan 13-14: Model User untuk Autentikasi

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);
