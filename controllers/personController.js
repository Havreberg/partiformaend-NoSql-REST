const person = require("../models/personModel");

async function getPerson(req, res) {
    const person = await person.find();
    if (!person) {
        return res.status(404).json({
            message: "person not found"
        })
    }
}

module.exports = { getPerson };