const { DataTypes } = require('sequelize');
const sequelize=require('../database/index.js')
const User = require('./user.js');


const Notification=sequelize.define('notification',{
    idnotification:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    notificationBody:{
        type:DataTypes.STRING(255),
        allowNull:true,
    },
    notificationDate:{
        type:DataTypes.DATE,
        allowNull:true,
    },
    notificationSeen:{
        type:DataTypes.TINYINT,
        allowNull:true,
    },
    userIduser:{
        type:DataTypes.INTEGER,
        allowNull:true,
    },
},{
    tableName:'notification'
})
Notification.belongsTo(User);

module.exports= Notification