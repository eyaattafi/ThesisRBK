
const { DataTypes } = require('sequelize');
const sequelize=require('../database/index.js')


const User = require('./user.js');
const Admin = require('./admin.js');

const Inbox = sequelize.define('inbox', {
    idinBox: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    inBoxObject: {
        type: DataTypes.STRING(45),
        allowNull: false,
      },
    inBoxBody: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    inBoxDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    inBoxStatus: {
        type : DataTypes.STRING(45),
        allowNull : true,
    },

    userIduser:{
        type:DataTypes.INTEGER,
        allowNull:false,

      },
    adminIdadmin : {
        type:DataTypes.INTEGER,
        allowNull:false
      }


  },{tableName:'inbox'});
  
  Inbox.belongsTo(User);
  Inbox.belongsTo(Admin);

  module.exports= Inbox