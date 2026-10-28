const mongoose = require("mongoose");

const bahasaProgramSchema = new mongoose.Schema(
  {
    nama: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    kategori: {
      type: String,
      required: true,
      trim: true,
    },
    dibuatOleh: {
      type: String,
      required: true,
      trim: true,
    },
    tahunRilis: {
      type: Number,
      required: true,
      min: 1950,
    },
    level: {
      type: String,
      enum: ["Pemula", "Menengah", "Mahir", "Pemula - Mahir", "Menengah - Mahir"],
      default: "Pemula",
    },
    deskripsi: {
      type: String,
      required: true,
      trim: true,
    },
    fiturUtama: {
      type: [String],
      default: [],
    },
    popularitas: {
      type: Number,
      default: 0,
      min: 0,
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

module.exports = mongoose.model("BahasaProgram", bahasaProgramSchema);
