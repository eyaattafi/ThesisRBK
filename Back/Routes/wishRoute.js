const wishRouter = require('express').Router();
const wishCont = require('../Controllers/wishlistCont');


wishRouter.get('/allwishes/:user_iduser', wishCont.getWishes);
wishRouter.post('/addwish', wishCont.createWish);
wishRouter.delete('/addwish/:idwishlist', wishCont.deleteWish);

module.exports = wishRouter;
