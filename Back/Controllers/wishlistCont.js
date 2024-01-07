const Wishlist= require('../Models/wishlist.js');


  async function getWishes(req, res) {
    try {
      const Wish = await Wishlist.findAll({ where: { user_iduser: req.params.user_iduser } });
      res.status(200).json(Wish)

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  async function createWish(req, res) {
    try {
      const newWish= await Wishlist.create(req.body);
      res.status(201).json(newWish);

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  
  module.exports = {
    getWishes,
    createWish
  };