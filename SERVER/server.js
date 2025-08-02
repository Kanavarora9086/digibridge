// SERVER/server.js
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Location = require("./models/Location");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/digibridge");

// Route to get all locations
app.get("/locations", async (req, res) => {
  try {
    const locations = await Location.find({});
    res.json(locations);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Health check route (optional)
app.get("/", (req, res) => {
  res.send("🚀 DigiBridge Backend is running!");
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
