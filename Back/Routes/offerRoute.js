const offerRouter = require('express').Router();
const offerCont = require('../Controllers/offerCont.js');



// GET all offers
offerRouter.get('/allOffers', offerCont.getAllOffers);

// GET oneOffer by id
offerRouter.get('/oneOffer/:idoffer', offerCont.getOneOffer);

// Create a new offer
offerRouter.post('/addOffer', offerCont.createOffer);

// Update a offer by id
offerRouter.put('/updateoffer/:idoffer', offerCont.updateOffer);

// Delete a offer by id
offerRouter.delete('/deleteoffer/:idoffer', offerCont.deleteOffer);

module.exports = offerRouter;
