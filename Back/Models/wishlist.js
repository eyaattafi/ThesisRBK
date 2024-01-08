const { DataTypes } = require('sequelize');
const sequelize=require('../database/index.js');

const User = require('./user.js');
const Offer = require('./offer.js')

const Wishlist = sequelize.define('Wishlist', {
  idwishlist: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  user_iduser: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  offer_idoffer: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Wishlist.belongsTo(User);
Wishlist.belongsTo(Offer);

module.exports = Wishlist;