const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const kundliRoutes = require("./routes/kundliRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api", kundliRoutes);

module.exports = app;