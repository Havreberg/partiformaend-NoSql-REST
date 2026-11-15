
function validateError(error, res, messages = {}) {
    const invalidId = messages.invalidId ?? "Ugyldigt person-id.";
    const invalidData = messages.invalidData ?? "Ugyldige oplysninger.";

    if (error.name === "CastError" && error.path === "_id") {
        res.status(400).json({
            message: invalidId
        });

        return true;
    }

    if (error.name === "ValidationError") {
        const errors = Object.values(error.errors).map((validationError) => {
            return validationError.message;
        });

        res.status(400).json({
            message: invalidData,
            details: errors
        });

        return true;
    }

    return false;
}


module.exports = validateError;