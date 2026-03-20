const Spot = require("../models/Spot");

exports.parkVehicle = async (licensePlate) => {

    const availableSpot = await Spot.findOne({ isOccupied: false }).sort({ spotNumber: 1 });

    if (!availableSpot) {
        throw new Error("Parking Lot Full!");
    }


    availableSpot.isOccupied = true;
    availableSpot.vehicleDetails = {
        licensePlate: licensePlate,
        entryTime: new Date()
    };

    await availableSpot.save();
    return availableSpot;
};
