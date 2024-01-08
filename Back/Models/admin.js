const { DataTypes } = require('sequelize');
const sequelize=require('../database/index.js')


const Admin = sequelize.define('admin', {
    idadmin: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    adminName: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
    adminEmail: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
    adminPassword: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    adminImage: {
        type : DataTypes.TEXT,
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
  
  },{tableName:'admin'});
  
console.log("admin")
   
   
  module.exports= Admin