const express = require("express");
const Kundli = require("../models/kundliModel");

const router = express.Router();

// Route to save Kundli details
router.post("/match", async (req, res) => {
  const { boy, girl } = req.body;

  // Mock compatibility calculation (random score)
  const compatibilityScore = Math.floor(Math.random() * 101);

  const kundli = new Kundli({ boy, girl, compatibilityScore });
  await kundli.save();

  res.json({ message: "Kundli matched successfully", compatibilityScore });
});

// Route to get all matched Kundlis
router.get("/results", async (req, res) => {
  const results = await Kundli.find();
  res.json(results);
});

module.exports = router;
