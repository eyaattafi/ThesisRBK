const sequilize = require('../database/index.js');
const {DataTypes} = require('sequelize');
const User = require('./user.js');

const Satisfaction = sequilize.define('satisfaction',{
    idsatisfaction :{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
  },
  satisfactionDegree:{
    type:DataTypes.ENUM,
    values:['Very satisfied','Satisfied','dissatified']
  },
  userIduser: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  
},{tableName:"satisfaction"})

Satisfaction.belongsTo(User)

module.exports = Satisfaction;  