// Mini Project - Pertemuan 28: Koneksi MongoDB, Routing, Auth & Error Handling
// (disalin dari Pertemuan 26-27 untuk latihan review arsitektur & debugging - lihat README pertemuan ini)

require("express-async-errors");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

const authRoutes = require("./routes/authRoutes");
const mahasiswaRoutes = require("./routes/mahasiswaRoutes");
const prodiRoutes = require("./routes/prodiRoutes");
const errorHandler = require("./middlewares/errorHandler");

// CORS (lihat Pertemuan 5) dibatasi ke satu origin production lewat FRONTEND_ORIGIN
// (Pertemuan 26-27) - default ke dev server Vite lokal jika belum diisi.
app.use(cors({ origin: process.env.FRONTEND_ORIGIN || "http://localhost:5173" }));
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/mahasiswa", mahasiswaRoutes);
app.use("/prodi", prodiRoutes);

// Middleware error handling - didaftarkan PALING AKHIR
app.use(errorHandler);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("Terhubung ke MongoDB Atlas");
    app.listen(PORT, () => {
      console.log(`Server berjalan di http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Gagal terhubung ke MongoDB:", err.message);
    process.exit(1);
  });
