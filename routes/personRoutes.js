const express = require("express");
const router = express.Router();

const { getPerson } = require( "../controllers/personController");

router.get("/", getPerson);

module.exports = router;