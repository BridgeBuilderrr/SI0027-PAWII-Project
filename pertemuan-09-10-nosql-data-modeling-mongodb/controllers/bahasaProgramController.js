const BahasaProgram = require("../models/bahasaProgramModel");

const getPaginationOptions = (req) => {
  const page = Math.max(Number(req.query.page) || 1, 1);
  const limit = Math.min(Math.max(Number(req.query.limit) || 10, 1), 20);

  return {
    page,
    limit,
    skip: (page - 1) * limit,
  };
};

const buildFilter = (req) => {
  const { q, kategori, level, tahunRilis, tahunMin, tahunMax } = req.query;
  const filter = {};

  if (q) {
    filter.$or = [
      { nama: { $regex: q, $options: "i" } },
      { deskripsi: { $regex: q, $options: "i" } },
      { dibuatOleh: { $regex: q, $options: "i" } },
    ];
  }

  if (kategori) {
    filter.kategori = { $regex: kategori, $options: "i" };
  }

  if (level) {
    filter.level = { $regex: level, $options: "i" };
  }

  if (tahunRilis) {
    filter.tahunRilis = Number(tahunRilis);
  }

  if (tahunMin || tahunMax) {
    filter.tahunRilis = {};
    if (tahunMin) filter.tahunRilis.$gte = Number(tahunMin);
    if (tahunMax) filter.tahunRilis.$lte = Number(tahunMax);
  }

  return filter;
};

const buildSort = (sortQuery) => {
  if (!sortQuery) return { nama: 1 };

  const sort = {};
  for (const part of sortQuery.split(",").filter(Boolean)) {
    const direction = part.startsWith("-") ? -1 : 1;
    const field = part.replace(/^[+-]/, "");

    if (["nama", "tahunRilis", "popularitas", "createdAt"].includes(field)) {
      sort[field] = direction;
    }
  }

  return Object.keys(sort).length ? sort : { nama: 1 };
};

exports.getAll = async (req, res, next) => {
  try {
    const { page, limit, skip } = getPaginationOptions(req);
    const filter = buildFilter(req);
    const sort = buildSort(req.query.sort);
    const projection = req.query.fields
      ? req.query.fields.split(",").map((field) => field.trim()).filter(Boolean).join(" ")
      : "";

    const [data, totalItems] = await Promise.all([
      BahasaProgram.find(filter)
        .sort(sort)
        .select(projection)
        .skip(skip)
        .limit(limit),
      BahasaProgram.countDocuments(filter),
    ]);

    const totalPages = Math.ceil(totalItems / limit);

    res.status(200).json({
      page,
      limit,
      totalItems,
      totalPages,
      hasNextPage: page < totalPages,
      hasPrevPage: page > 1,
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.getById = async (req, res, next) => {
  try {
    const data = await BahasaProgram.findById(req.params.id);
    if (!data) {
      const error = new Error("Data bahasa pemrograman tidak ditemukan");
      error.status = 404;
      throw error;
    }

    res.status(200).json(data);
  } catch (err) {
    next(err);
  }
};

exports.create = async (req, res, next) => {
  try {
    const data = await BahasaProgram.create(req.body);
    res.status(201).json({
      message: "Data bahasa pemrograman berhasil ditambahkan",
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.update = async (req, res, next) => {
  try {
    const data = await BahasaProgram.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!data) {
      const error = new Error("Data bahasa pemrograman tidak ditemukan");
      error.status = 404;
      throw error;
    }

    res.status(200).json({
      message: "Data bahasa pemrograman berhasil diperbarui",
      data,
    });
  } catch (err) {
    next(err);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const data = await BahasaProgram.findByIdAndDelete(req.params.id);

    if (!data) {
      const error = new Error("Data bahasa pemrograman tidak ditemukan");
      error.status = 404;
      throw error;
    }

    res.status(200).json({
      message: "Data bahasa pemrograman berhasil dihapus",
      deletedData: data,
    });
  } catch (err) {
    next(err);
  }
};
