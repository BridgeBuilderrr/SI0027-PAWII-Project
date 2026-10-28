const express = require("express");
const router = express.Router();
const bahasaProgramController = require("../controllers/bahasaProgramController");

router.get("/", bahasaProgramController.getAll);
router.get("/:id", bahasaProgramController.getById);
router.post("/", bahasaProgramController.create);
router.put("/:id", bahasaProgramController.update);
router.delete("/:id", bahasaProgramController.remove);

module.exports = router;
