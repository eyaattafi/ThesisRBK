const wishRouter = require('express').Router();
const wishCont = require('../Controllers/wishlistCont');


wishRouter.get('/wish/:id', wishCont.getWishes);
wishRouter.post('/addwish', wishCont.createWish);

module.exports = wishRouter;
