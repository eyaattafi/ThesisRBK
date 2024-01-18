const offerHasCatRouter=require("express").Router()
const OfferHasCat =require('../Controllers/offerhascatCont.js')


offerHasCatRouter.get('/getAllOffersByCat',OfferHasCat.getOfferHasCat);
offerHasCatRouter.post('/addOfferByCat',OfferHasCat.createOfferByCat);
// offerHasCatRouter.put('/updateOffer/:offerid',OfferHasCat.updateOfferByCat);
// offerHasCatRouter.delete('/deleteOffer/:offerid',OfferHasCat.deleteOfferByCat);

module.exports=offerHasCatRouter
