const mongoose = require("mongoose");

const spotSchema = new mongoose.Schema({
    spotNumber: { type: Number, required: true, unique: true },
    type: { type: String, enum: ["compact", "large", "motorcycle"], default: "compact" },
    isOccupied: { type: Boolean, default: false },
    vehicleDetails: {
        licensePlate: String,
        entryTime: Date
    }
}, { timestamps: true });

module.exports = mongoose.model("Spot", spotSchema);
