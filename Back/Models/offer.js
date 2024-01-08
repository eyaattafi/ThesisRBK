const { DataTypes } = require('sequelize');
const sequelize=require('../database/index.js')

const User = require('./user.js');

const Offer = sequelize.define('offer', {
    idoffer: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    offerTitle: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    offerDescription: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    offerImages: {
        type: DataTypes.JSON,
      allowNull: true,
    },
    offerPrice: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    offerType: {
        type : DataTypes.STRING(45),
        allowNull : true,
    },
    offerStatus : {
        type: DataTypes.TINYINT,
        allowNull : true,
    },
    qrCode: {
        type : DataTypes.TEXT,
        allowNull : true,
    },
    renterOrNot : {
        type: DataTypes.TINYINT,
        allowNull : true,
    },
    latitude : {
        type : DataTypes.STRING(45),
        allowNull : true,
    },
    longitude : {
        type : DataTypes.STRING(45),
        allowNull : true,
    },
    userIduser: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    categorieIdcategorie : { 
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  },{tableName:'offer'});
  
   
  Offer.belongsTo(User);

  module.exports= Offer
  