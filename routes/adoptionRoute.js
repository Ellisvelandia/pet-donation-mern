const express = require("express");
const adoptionController = require("../controllers/adoptionController");

const router = express.Router();

router.get("/all", adoptionController.getAll);

router.post("/create", adoptionController.create);

module.exports = router;
