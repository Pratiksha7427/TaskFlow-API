const express = require("express");

const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Import Routes
const taskRoutes = require("./routes/tasks");

// Home Route
app.get("/", (req, res) => {
    res.send("🚀 Welcome to TaskFlow API");
});

// Use Task Routes
app.use("/tasks", taskRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});