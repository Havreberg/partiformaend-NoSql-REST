const person = require("../models/personModel");

async function getPerson(req, res) {
    try {
        const persons = await person.find(undefined, undefined, undefined);

        return res.status(200).json(persons);
    } catch (error) {
        return res.status(500).json({
            message: "Could not fetch persons"
        });
    }
}

async function createPerson(req, res) {
    try {
        const newPerson = await person.create(req.body);

        res.status(201).json(newPerson);
    } catch (error) {
        console.error("Error creating person:", error.message);

        if (error.message) {
            return res.status(400).json({
                error: error.message
            });
        }

        res.status(500).json({
            error: "Could not create person"
        });
    }
}



module.exports = { getPerson, createPerson };