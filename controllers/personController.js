const person = require("../models/personModel");
const validateError = require("../middleware/validateError");

async function getPerson(req, res) {
    try {
        const persons = await person.find();

        return res.status(200).json(persons);
    } catch (error) {
        return res.status(500).json({
            message: "Serverfejl"
        });
    }
}

async function getMinister(req, res) {
    try {
        const ministers = await person.find({ position: "minister" });

        return res.status(200).json(ministers);
    } catch (error) {
        return res.status(500).json({
            message: "Serverfejl"
        });
    }
}

async function getChairPeople(req, res) {
    try {
        const chairPeople = await person.find({ position: "formand" });

        return res.status(200).json(chairPeople);
    } catch (error) {
        return res.status(500).json({
            message: "Serverfejl"
        });
    }
}

async function getPersonById(req, res) {
    try {
        const personById = await person.findById(req.params.id);

        if (!personById) {
            return res.status(404).json({
                message: "Kunne ikke finde person:"
            });
        }
        return res.status(200).json(personById);

    } catch (error) {
        const messages = {
            invalidId: "Id'et på personen er ugyldigt:.",
            invalidData: "Personens oplysninger er ugyldige:"
        };

        if (validateError(error, res, messages)) {
            return;
        }

        return res.status(500).json({
            message: "Serverfejl"
        });
    }
}

async function createPerson(req, res) {
    try {
        const newPerson = await person.create(req.body);

        res.status(201).json(newPerson);

    } catch (error) {
        const messages = {
            invalidData: "Kunne ikke opret person:"
        };

        if (validateError(error, res, messages)) {
            return;
        }

        res.status(500).json({
            message: "serverfejl"
        });
    }
}

async function updatePerson(req, res){
    try {
        const updatedPerson = await person.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                returnDocument: "after",
                runValidators: true
            }
        );

        if (!updatedPerson) {
            return res.status(404).json({
                message: "Person blev ikke fundet:"
            });
        }

        res.status(200).json(updatedPerson);

        } catch (error) {
        const messages = {
            invalidId: "Id'et på personen er ugyldigt:",
            invalidData: "Personens oplysninger er ugyldige:"
        };

        if (validateError(error, res, messages)) {
            return;
        }

        return res.status(500).json({
            message: "Serverfejl"
        });
    }
}

async function deletePerson(req, res) {
    try {
        const deletedPerson = await person.findByIdAndDelete(req.params.id);

        if (!deletedPerson) {
            return res.status(404).json({
                message: "Person blev ikke fundet"
            });
        }

        res.status(200).json({
            message: "Slettelsen af person var succes:",
            person: deletedPerson
        });

    } catch (error) {
        const messages = {
            invalidId: "Id'et på personen er ugyldigt:.",
            invalidData: "Personens oplysninger er ugyldige:"
        };

        if (validateError(error, res, messages)) {
            return;
        }

        return res.status(500).json({
            message: "Serverfejl"
        })
    }
}

module.exports = {
    getPerson,
    getMinister,
    getChairPeople,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson
};
