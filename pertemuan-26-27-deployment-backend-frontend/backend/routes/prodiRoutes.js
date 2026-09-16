// Mini Project - Pertemuan 13-14: Route Prodi (sudah lengkap)

const express = require("express");
const router = express.Router();
const prodiController = require("../controllers/prodiController");

router.get("/", prodiController.getAll);
router.post("/", prodiController.create);

module.exports = router;
