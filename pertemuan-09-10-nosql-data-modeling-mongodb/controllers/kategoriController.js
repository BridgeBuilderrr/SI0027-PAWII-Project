const Kategori = require("../models/kategoriModel");

exports.getAll = async (req, res, next) => {
  try {
    const data = await Kategori.find();
    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const data = await Kategori.create(req.body);
    res.status(201).json({
      message: "Kategori berhasil ditambahkan",
      data,
    });
  } catch (err) {
    next(err);
  }
};
