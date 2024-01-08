const Offer=require('../Models/offer.js')


async function getOffers(req, res) {
    try {
      const offers = await Offer.findAll();
      res.status(200).json(offers)

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async function getOneOffer(req, res) {
    try {
      const offer = await Offer.findOne({where:{idoffer:req.params.offerid}});
      res.status(200).json(offer)

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async function createOffer(req, res) {
    try {
      const newOffer= await Offer.create(req.body);
      res.status(201).json(newOffer);

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async function updateOffer(req, res) {
    try {
     
      const updatedOffer = await Offer.update(req.body, {
        where: {idoffer : req.params.offerid},
      });
      res.json(updatedOffer)
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  async function deleteOffer(req, res) {
    try {
     
      const deletedOffer = await Offer.destroy({
        where: {idoffer : req.params.offerid},
      });
      res.json(deletedOffer)
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  module.exports = {
    getOffers,
    getOneOffer,
    createOffer,
    updateOffer,
    deleteOffer
  };