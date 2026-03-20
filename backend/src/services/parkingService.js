const Spot = require("../models/Spot"); // Your Mongoose model

exports.exitVehicle = async (ticketId) => {
    const spot = await Spot.findOne({ ticketId, status: "occupied" });
    if (!spot) throw new Error("Ticket not found or already processed");

    // Logic: Calculate fee based on time
    const durationInHours = (Date.now() - spot.entryTime) / 3600000;
    const fee = Math.ceil(durationInHours) * 10; // Example: $10/hr

    spot.status = "available";
    spot.ticketId = null;
    await spot.save();

    return { message: "Exit successful", fee };
};
