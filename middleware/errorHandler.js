
function errorHandler(error, req, res, next) {
    if (res.headersSent) {
        return next(error)
    }

    if (error.isJoi) {
        return res.status(400).json({
            message: "Personens oplysninger er ugyldige.",
            details: error.details.map((detail) => detail.message)
        });
    }

    if (error.name === "ValidationError") {
        return res.status(400).json({
            message: "Personens oplysninger er ugyldige."
        });
    }

    if (error.name === 'CastError' && error.path === "_id") {
        return res.status(400).json({
            message: "Ugyldigt person-id."
        })
    }

    if (error.status) {
        return res.status(error.status).json({
            message: error.message
        });
    }

    console.error(error)

    return res.status(500).json({
        message: "Serverfejl."
    })
}


module.exports = errorHandler;