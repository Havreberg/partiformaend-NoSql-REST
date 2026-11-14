const express = require("express");
const router = express.Router();

const { getPerson, getPersonById ,createPerson, updatePerson, deletePerson } = require( "../controllers/personController");

router.get("/", getPerson);
router.get("/:id", getPersonById);
router.post("/", createPerson);
router.put("/:id", updatePerson);
router.delete("/:id", deletePerson);

module.exports = router;