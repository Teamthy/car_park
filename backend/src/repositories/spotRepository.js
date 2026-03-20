const Spot = require("../models/Spot");

exports.findAndReserveSpot = (type) => {
    return Spot.findOneAndUpdate(
        { type, isOccupied: false },
        { isOccupied: true },
        { new: true }
    );
};

exports.releaseSpot = (id) => {
    return Spot.findByIdAndUpdate(id, { isOccupied: false });
};