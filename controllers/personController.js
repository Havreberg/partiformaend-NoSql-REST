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

async function getPersonById(req, res) {
    try {
        const personById = await person.findById(req.params.id);

        if (!personById) {
            return res.status(404).json({
                message: "Person not found"
            });
        }
        return res.status(200).json(personById);

    } catch (error) {
        if (error.message) {
            return res.status(400).json({
                error: error.message
            });
        }

        return res.status(500).json({
            message: "Could not fetch person"
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

async function updatePerson(req, res){
    try {
        const updatePerson = await person.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                returnDocument: "after", runValidators: true
            }
        );
        if (!updatePerson) {
            return res.status(404).json({
                error: "Person not found"
            });
        }
        res.status(200).json(updatePerson);

        } catch (error) {
            if (error.message) {
                return res.status(400).json({
                    error: error.message
                });
            }

        return res.status(500).json({
            message: "Could not update person"
        });
    }
}

async function deletePerson(req, res) {
    try {
        const deletePerson = await person.findByIdAndDelete(req.params.id);

        if (!deletePerson) {
            return res.status(404).json({
                error: "Person not found"
            });
        }

        res.status(200).json({
            message: "Deleted person successfully",
            person: deletePerson
        });

    } catch (error) {
        if (error.message) {
            return res.status(400).json({
                error: error.message
            });
        }

        return res.status(500).json({
            message: "Could not delete person"
        })
    }
}



module.exports = { getPerson, getPersonById, createPerson, updatePerson, deletePerson };