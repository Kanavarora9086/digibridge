// SERVER/models/Location.js
const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  name: String,
  type: String, // e.g., "Mandir", "NGO", "Bank", "ATM"
  lat: Number,
  lng: Number,
});

module.exports = mongoose.model("Location", locationSchema);
