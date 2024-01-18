const Bid = require('../Models/BID.js');
const User=require('../Models/user.js')

async function getBids(req, res) {
    try {
      const bids = await Bid.findAll({include:{model:User}, where: { offerIdoffer: req.params.offerid } });
      res.status(200).json(bids)

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async function createBid(req, res) {
    try {
      const newBid= await Bid.create(req.body);
      res.status(201).json(newBid);

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async function updateBid(req, res) {
    try {
     
      const updatedBid = await Bid.update(req.body, {
        where: {idBID : req.params.idbid},
      });
      res.json(updatedBid)
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async function deleteBid(req, res) {
    try {
     
      const deletedBid = await Bid.destroy({
        where: {idBID : req.params.idbid},
      });
      res.json(deletedBid)
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  module.exports = {
    getBids,
    createBid,
    updateBid,
    deleteBid
  };