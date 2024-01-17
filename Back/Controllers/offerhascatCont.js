const OfferHasCat =require('../Models/offerhascat.js')


async function getOfferHasCat(req, res) {
    try {
      const offers = await OfferHasCat.findAll();
      res.status(200).json(offers)

    } catch (error) {
        console.log(error);
      res.status(500).json({ error: error.message });
    }
  }


  async function createOfferByCat(req, res) {
    try {
      const newOffer= await Offer.create(req.body);
      res.status(201).json(newOffer);

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }

  module.exports = {
    getOfferHasCat,
    createOfferByCat
  };