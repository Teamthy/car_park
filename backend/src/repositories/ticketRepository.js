const Ticket = require("../models/Ticket");

exports.createTicket = (data) => Ticket.create(data);
exports.getTicket = (id) => Ticket.findById(id);
exports.saveTicket = (ticket) => ticket.save();
