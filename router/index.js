const express = require("express");

const router = express.Router();

const formrouter = require("./formrouter");

router.use(formrouter);

module.exports = router;