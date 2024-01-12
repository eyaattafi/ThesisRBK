const reservationRouter=require("express").Router()
const Reservation=require('../Controllers/reservationsCont.js')


reservationRouter.get('/getReservations/:offerid',Reservation.getReservations)
reservationRouter.get('/getReservationByCat/:idCat',Reservation.getReserByCat)
reservationRouter.post('/addreservation', Reservation.createReservation);
reservationRouter.put('/updatereservation/:idreserv', Reservation.updateReservation);
reservationRouter.delete('/deletereservation/:idreserv', Reservation.deleteReservation);
module.exports=reservationRouter