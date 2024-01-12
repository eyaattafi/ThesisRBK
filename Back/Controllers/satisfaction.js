const Satisfaction= require('../Models/satisfaction');

async function getsat(req, res) {
    try {
  
      const allUs = await Satisfaction.findAll();
      res.json(allUs);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async function getSatisfactoin(req, res) {
    
    try {
      const satis = await Satisfaction.findOne({ where: { idsatisfaction: req.params.iduser } });
      res.status(200).json(satis)
      console.log(req.params);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async function createSatisfaction(req, res) {
    try {
      const newSatis= await Satisfaction.create(req.body);
      res.status(201).json(newSatis);

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  module.exports = {
    getSatisfactoin,
    createSatisfaction,
    getsat
  };