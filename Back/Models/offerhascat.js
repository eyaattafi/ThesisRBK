const { DataTypes } = require('sequelize');
const sequelize=require('../database/index.js');

const Cat = require('./categories.js');
const Offer = require('./offer.js')

const OfferHasCat = sequelize.define('offerHasCategorie', {
    offerIdoffer: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  categorieIdcategorie: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
},{tableName:'offerHasCategorie'});

Offer.belongsToMany(Cat, { through: OfferHasCat , foreignKey: ' offerIdoffer' });
Cat.belongsToMany(Offer, { through: OfferHasCat , foreignKey: ' categorieIdcategorie' })

module.exports = OfferHasCat;