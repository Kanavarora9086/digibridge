// SERVER/seed.js
const mongoose = require("mongoose");
const Location = require("./models/Location");

mongoose.connect("mongodb://127.0.0.1:27017/digibridge");

const sampleData = [
  { name: "Shri Mandir", type: "Mandir", lat: 28.6129, lng: 77.2295 },
  { name: "Hope NGO", type: "NGO", lat: 28.6139, lng: 77.2177 },
  { name: "SBI Bank", type: "Bank", lat: 28.6100, lng: 77.2300 },
  { name: "ATM Booth", type: "ATM", lat: 28.6145, lng: 77.2289 },
];

const seedDB = async () => {
  await Location.deleteMany({});
  await Location.insertMany(sampleData);
  console.log("✅ Database seeded!");
  mongoose.connection.close();
};

seedDB();
