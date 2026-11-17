const Joi = require("joi");

const personSchema = Joi.object({
    name: Joi.string().trim().min(1).required().messages({
        "string.empty": "Navn skal udfyldes.",
        "any.required": "Navn skal udfyldes."
    }),
    party: Joi.string().trim().min(1).required().messages({
        "string.empty": "Parti skal udfyldes.",
        "any.required": "Parti skal udfyldes."
    }),
    position: Joi.string().trim().lowercase().valid("minister", "formand").required().messages({
        "string.empty": "Position skal udfyldes.",
        "any.required": "Position skal udfyldes.",
        "any.only": "Position skal være enten minister eller formand."
    }),
    startDate: Joi.date().iso().optional()
});

module.exports = { personSchema };