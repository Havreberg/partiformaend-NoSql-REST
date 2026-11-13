const express = require("express");
const mongoose = require("mongoose");
const personRoutes = require("./routes/personRoutes");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Routes
app.use("/person", personRoutes);

// MongoDB connection
async function startServer() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/person");

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