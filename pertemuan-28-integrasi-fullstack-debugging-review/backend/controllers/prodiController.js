// Solusi Referensi - Pertemuan 13-14: Controller Prodi (dipertahankan dari Pertemuan 11-12)

const Prodi = require("../models/prodiModel");

exports.getAll = async (req, res) => {
  const data = await Prodi.find();
  res.json(data);
};

exports.create = async (req, res) => {
  const prodi = await Prodi.create(req.body);
  res.status(201).json(prodi);
};
