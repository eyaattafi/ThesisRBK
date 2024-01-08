const Reservation = require('../Models/reservations.js');

async function getReservations(req, res) {
    try {
      const reservations = await Reservation.findAll({ where: { offerIdoffer: req.params.offerid } });
      res.status(200).json(reservations)

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async function createReservation(req, res) {
    try {
      const reservation= await Reservation.create(req.body);
      res.status(201).json(reservation);

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async function updateReservation(req, res) {
    try {
     
      const reservation = await Reservation.update(req.body, {
        where: {idreservation : req.params.idreserv},
      });
      res.json(reservation)
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async function deleteReservation(req, res) {
    try {
     
      const reservation= await Reservation.destroy({
        where: {idreservation : req.params.idreserv},
      });
      res.json(reservation)
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  module.exports = {
    getReservations,
    createReservation,
    updateReservation,
    deleteReservation
  };





