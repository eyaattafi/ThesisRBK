const { DataTypes } = require('sequelize');
const sequelize=require('../database/index.js')
const User = require('./user.js');
const Offer = require('./offer.js')

const Bid=sequelize.define('bid',{
    idBID:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    BIDprice:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
    BIDstartDate:{
        type:DataTypes.DATE,
        allowNull:true,
    },
    BIDendDate:{
        type:DataTypes.DATE,
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
    tableName:'bid'
})
Bid.belongsTo(User);
Bid.belongsTo(Offer);
module.exports= Bid