const express = require("express");
const { createform, fetchform, deleteform, updateform } = require("../controller/form");

const router = express.Router();

router.post("/create-form", createform);
router.get("/fetch-form",fetchform);
router.delete("/delete-user/:id",deleteform);
router.put("/update-form/:id",updateform)

module.exports = router;