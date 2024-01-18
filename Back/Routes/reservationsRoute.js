const reservationRouter=require("express").Router()
const Reservation=require('../Controllers/reservationsCont.js')


reservationRouter.get('/getReservations/:offerid',Reservation.getReservations);
reservationRouter.get('/confirmedReservations',Reservation.getConfirmedReservations)
reservationRouter.get('/getReservationByUser/:userid',Reservation.getReserByuserId);
reservationRouter.post('/addreservation', Reservation.createReservation);
reservationRouter.put('/updatereservation/:idreserv', Reservation.updateReservation);
reservationRouter.delete('/deletereservation/:idreserv', Reservation.deleteReservation);
module.exports=reservationRouter