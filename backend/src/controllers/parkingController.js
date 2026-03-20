
const parkingService = require("../services/parkingService");

exports.park = async (req, res, next) => {
    try {
        const parkedSpot = await parkingService.parkVehicle(req.body.licensePlate);
        res.status(200).json(parkedSpot);
    } catch (err) {
        next(err);
    }
};


exports.exit = async (req, res, next) => {
    try {
        res.json({ message: "Exit logic" });
    } catch (err) {
        next(err);
    }
};

exports.exit = async (req, res, next) => {
    try {
        const { licensePlate } = req.body;
        if (!licensePlate) return res.status(400).json({ message: "License plate required" });

        const result = await parkingService.exitVehicle(licensePlate);
        res.status(200).json(result);
    } catch (err) {
        next(err);
    }
};
exports.getStatus = async (req, res, next) => {
    try {
        const spots = await parkingService.getAllSpots();
        res.status(200).json(spots);
    } catch (err) {
        next(err);
    }
};
