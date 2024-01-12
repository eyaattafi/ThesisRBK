const { DataTypes } = require('sequelize');
const sequelize=require('../database/index.js')
const User = require('./user.js');
const Offer = require('./offer.js')

const Review=sequelize.define('reviews',{
    idreviews:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    reviewsBody:{
        type:DataTypes.STRING(255),
        allowNull:true,
    },
    userIduser:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    offerIdoffer:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
},{
    tableName:'reviews'
})
Review.belongsTo(User);
Review.belongsTo(Offer);
module.exports= Review