const express = require("express");
const router = express.Router();

const { getPerson, createPerson } = require( "../controllers/personController");

router.get("/", getPerson);
router.post("/", createPerson);

module.exports = router;