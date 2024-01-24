const Wishlist= require('../Models/wishlist.js');
const offer=require('../Models/offer.js')

  async function getWishes(req, res) {
    try {
      const Wish = await Wishlist.findAll({include:[{ model:offer}], where: { userIduser: req.params.user_iduser } });
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

  async function deleteWish(req, res) {
    try {
      const deWish= await Wishlist.destroy({where:{idwishlist: req.params.idwishlist}})
      res.status(201).json(deWish);

    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  }
  


  module.exports = {
    getWishes,
    createWish,
    deleteWish
  };