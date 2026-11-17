const express = require("express");
const validateBody = require("../middleware/validateBody");
const { personSchema } = require("../schemas/personSchema");
const router = express.Router();

const {
    getPerson,
    getMinister,
    getChairPeople,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson
} = require("../controllers/personController");

router.get("/", getPerson);
router.get("/minister", getMinister);
router.get("/formand", getChairPeople);
router.get("/:id", getPersonById);
router.post("/",validateBody(personSchema), createPerson);
router.put("/:id", validateBody(personSchema), updatePerson);
router.delete("/:id", deletePerson);

module.exports = router;
