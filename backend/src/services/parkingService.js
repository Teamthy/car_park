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
exports.exitVehicle = async (licensePlate) => {
    const spot = await Spot.findOne({ "vehicleDetails.licensePlate": licensePlate, isOccupied: true });

    if (!spot) throw new Error("Vehicle not found in the parking lot");


    const exitTime = new Date();
    const entryTime = new Date(spot.vehicleDetails.entryTime);
    const durationInMs = exitTime - entryTime;
    const durationInHours = Math.ceil(durationInMs / (1000 * 60 * 60));

    const fee = durationInHours * 10;


    spot.isOccupied = false;
    spot.vehicleDetails = null;
    await spot.save();

    return {
        message: "Vehicle exited successfully",
        licensePlate,
        durationHours: durationInHours,
        fee: `$${fee}`
    };
};
exports.getAllSpots = async () => {
    return await Spot.find({}).sort({ spotNumber: 1 });
};
