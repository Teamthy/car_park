const parkingService = require("../services/parkingService");

exports.park = async (req, res, next) => {
    try {
        const { licensePlate } = req.body;
        if (!licensePlate) return res.status(400).json({ message: "License plate required" });

        const parkedSpot = await parkingService.parkVehicle(licensePlate);
        res.status(200).json({ message: "Car Parked Successfully", data: parkedSpot });
    } catch (err) {
        next(err); // Sends error to your errorMiddleware
    }
};
