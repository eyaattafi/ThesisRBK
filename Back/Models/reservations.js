const { DataTypes } = require('sequelize');
const sequelize=require('../database/index.js')
const User = require('./user.js');
const Offer = require('./offer.js')

const Reservation=sequelize.define('reservation',{
    idreservation:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    reservationStatus:{
        type:DataTypes.STRING(45),
        allowNull:true,
    },
    reservationStartDate:{
        type:DataTypes.DATE,
        allowNull:true,
    },
    reservationEndDate:{
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
    tableName:'reservation'
})
Reservation.belongsTo(User);
Reservation.belongsTo(Offer);
module.exports= Reservation