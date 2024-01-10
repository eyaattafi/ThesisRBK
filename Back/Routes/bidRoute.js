const bidRouter=require("express").Router()
const Bid=require('../Controllers/bidCont.js')


bidRouter.get('/getBid/:offerid',Bid.getBids)
bidRouter.post('/addBid', Bid.createBid);
bidRouter.put('/updateBid/:idbid', Bid.updateBid);
bidRouter.delete('/deleteBid/:idbid', Bid.deleteBid);
module.exports=bidRouter