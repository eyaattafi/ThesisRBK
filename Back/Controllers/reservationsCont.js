const Reservation = require('../Models/reservations.js');
const Offer = require('../Models/offer.js')
const User = require('../Models/user.js')

// Get All reservations //
async function getReservations(req, res) {
    try {
      const reservations = await Reservation.findAll({ where: { offerIdoffer: req.params.offerid } });
      res.status(200).json(reservations)

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

//Get All Confirmed Reservations //
async function getConfirmedReservations (req, res) {
  try {
   
    const confirmedRes= await Reservation.findAll({
     include:[{ model:User},{model:Offer}], where: {  reservationStatus:"confirmed"} });

    res.json(confirmedRes)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}



// Get all reservations by category // 

async function getReserByuserId (req, res) {
  try {
   
    const reservation= await Reservation.findAll({
       where: { userIduser:req.params.userid} });

    res.json(reservation)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

 // Add New Reservation // 
  async function createReservation(req, res) {
    try {
      const reservation= await Reservation.create(req.body);
      res.status(201).json(reservation);

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  // Update a reservation //
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


  // Delete a reservation //
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
    deleteReservation,
    getReserByuserId,
    getConfirmedReservations
  };





