// Solusi Referensi - Pertemuan 13-14: Route Prodi (dipertahankan dari Pertemuan 11-12)

const express = require("express");
const router = express.Router();
const prodiController = require("../controllers/prodiController");

router.get("/", prodiController.getAll);
router.post("/", prodiController.create);

module.exports = router;
