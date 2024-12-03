const mongoose = require("mongoose");

const KundliSchema = new mongoose.Schema({
  boy: {
    name: String,
    birthDate: String,
    birthTime: String,
    birthCity: String,
  },
  girl: {
    name: String,
    birthDate: String,
    birthTime: String,
    birthCity: String,
  },
  compatibilityScore: Number,
});

const Kundli = mongoose.model("Kundli", KundliSchema);

module.exports = Kundli;