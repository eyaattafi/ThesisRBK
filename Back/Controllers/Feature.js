const feature=require('../Models/Feature');
const Offer = require('../Models/offer');


async function getOffersByFeature(req, res) {
    try {
      const features = await feature.findAll({include:{model:Offer}, where: { idcategorie: req.params.id } });
      res.status(200).json(bids)

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  module.exports ={getOffersByFeature}