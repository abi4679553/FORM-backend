const express = require("express");
const { createform, fetchform, deleteform } = require("../controller/form");

const router = express.Router();

router.post("/create-form", createform);
router.get("/fetch-form",fetchform);
router.delete("/delete-user/:id",deleteform);

module.exports = router;