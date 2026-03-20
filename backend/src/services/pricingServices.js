const spotRepo = require("../repositories/spotRepository");
const ticketRepo = require("../repositories/ticketRepository");
const { calculateFee } = require("./pricingService");

exports.parkVehicle = async ({ plate, type }) => {
    const spot = await spotRepo.findAndReserveSpot(type);

    if (!spot) throw new Error("Parking Full");

    const ticket = await ticketRepo.createTicket({
        plate,
        type,
        spotId: spot._id,
        entryTime: new Date(),
    });

    return {
        ticketId: ticket._id,
        floor: spot.floor,
        spot: spot.spotNumber,
    };
};

exports.exitVehicle = async (ticketId) => {
    const ticket = await ticketRepo.getTicket(ticketId);
    if (!ticket) throw new Error("Invalid Ticket");

    const exitTime = new Date();
    const fee = calculateFee(ticket.entryTime, exitTime);

    ticket.exitTime = exitTime;
    ticket.fee = fee;

    await ticketRepo.saveTicket(ticket);
    await spotRepo.releaseSpot(ticket.spotId);

    return { fee };