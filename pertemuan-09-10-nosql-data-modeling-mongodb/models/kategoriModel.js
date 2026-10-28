const mongoose = require("mongoose");

const kategoriSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    deskripsi: {
      type: String,
      default: "",
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    versionKey: false,
  }
);

module.exports = mongoose.model("Kategori", kategoriSchema);
