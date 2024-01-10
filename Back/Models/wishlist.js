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
  userIduser: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  offerIdoffer: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},{tableName:'wishlist'});

Wishlist.belongsTo(User);
Wishlist.belongsTo(Offer);

module.exports = Wishlist;