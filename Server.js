const dotenv = require("dotenv");
const app = require("./app");
const connectDB = require("./config/db");
const mongoose = require("mongoose");
// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect("add your string here", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.log(err));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));