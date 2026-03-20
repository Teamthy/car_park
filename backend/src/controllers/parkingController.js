const parkingService = require("../services/parkingService");

exports.park = async (req, res) => {
    try {
        const result = await parkingService.parkVehicle(req.body);
        res.json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

exports.exit = async (req, res) => {
    try {
        const result = await parkingService.exitVehicle(req.body.ticketId);
        res.json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};