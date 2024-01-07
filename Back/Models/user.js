const {DataTypes,Sequelize} =require('sequelize')
const sequelize=require('../database/index.js')


const User = sequelize.define('user', {
    iduser: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userName: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
    userEmail: {
        type: DataTypes.STRING(45),
        allowNull: true,
      },
    userPassword: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    userConfirmPass: {
        type: DataTypes.STRING(255),
        allowNull: true,
      },
    userImage: {
        type : DataTypes.TEXT,
        allowNull : true,
    },
    userBlocked : {
        type: DataTypes.TINYINT,
        allowNull : true,
    },
    userLatitude : {
        type : DataTypes.STRING(45),
        allowNull : true,
    },
    userLongitude : {
        type : DataTypes.STRING(45),
        allowNull : true,
    },
  
  },{tableName:'user'});
  
   
   
  module.exports= User