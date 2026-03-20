require("dotenv").config();
const mongoose = require("mongoose");
const Spot = require("./models/Spot");

const seedDB = async () => {
    await mongoose.connect(process.env.MONGO_URI);
    await Spot.deleteMany({}); // Clear existing spots

    const spots = [];
    for (let i = 1; i <= 10; i++) {
        spots.push({ spotNumber: i, isOccupied: false });
    }

    await Spot.insertMany(spots);
    console.log("✅ 10 Parking Spots Created!");
    process.exit();
};

seedDB();
