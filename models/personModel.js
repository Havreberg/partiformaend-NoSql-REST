const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    navn: {
        type: String,
        required: true,
    },
    parti: {
        type: String,
        required: true,
    },
    position: {
        type: String,
        required: true,
    },
    startdato: {
        type: String,
        required: true,
    }
});

module.exports = mongoose.model("person", personSchema);

