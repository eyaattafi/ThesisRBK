
const { DataTypes } = require('sequelize');
const sequelize=require('../database/index.js')


const User = require('./user.js');
const Admin = require('./admin.js');

const Inbox = sequelize.define('admin', {
    idinBox: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    inboxObject: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
    inboxBody: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    inboxDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    inboxStatus: {
        type : DataTypes.STRING(45),
        allowNull : true,
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
      },
      user_iduser:{
        type:DataTypes.INTEGER,
        allowNull:false,

      },
      admin_idadmin : {
        type:DataTypes.INTEGER,
        allowNull:false
      }


  },{tableName:'inbox'});
  
  Inbox.belongsTo(User);
  Inbox.belongsTo(Admin);

  module.exports= Inbox