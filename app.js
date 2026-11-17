require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const personRoutes = require("./routes/personRoutes");
const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");

const app = express();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

// Middleware
app.use(logger)
app.use(express.json());

// Routes
app.use("/medlemmer", personRoutes);
app.use(errorHandler);

// MongoDB connection
async function startServer() {
    try {
        await mongoose.connect(MONGODB_URI);

        console.log("Connected to MongoDB!");

        app.listen(PORT, () => {
            console.log(`Server running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
}

startServer();