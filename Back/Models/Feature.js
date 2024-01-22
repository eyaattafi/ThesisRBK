const { DataTypes } = require('sequelize');
const sequelize=require('../database/index.js');
const Categories = require('./categories.js');
const Offer = require('./offer.js');


const Feature = sequelize.define('feature', {
  categorieIdcategorie: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    offerIdoffer: {
        type: DataTypes.INTEGER(45),
        allowNull: true,
      } 
  },{tableName:'features'});
  
console.log("admin")
   
Feature.belongsTo(Categories)
Feature.belongsTo(Offer)
   
  module.exports= Feature