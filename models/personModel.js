const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Navn skal udfyldes."],
        trim: true
    },
    party: {
        type: String,
        required: [true, "Parti skal udfyldes."],
        trim: true
    },
    position: {
        type: String,
        required: [true, "Position skal udfyldes."],
        enum: {
            values: ["minister", "formand"],
            message: "Position skal være enten minister eller formand"
        },
        trim: true,
        lowercase: true
    },
    startDate: {
        type: Date,
        required: false,
    }
});

module.exports = mongoose.model("person", personSchema);

