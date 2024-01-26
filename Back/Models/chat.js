const sequelize= require ('../database/index');
const {DataTypes } = require('sequelize');
const user = require('./user'); 
const admin = require('./admin'); 

const Chat = sequelize.define('chat', {
  idchat: {
    type: DataTypes.INTEGER,
   
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  user_iduser: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
      admin_idadmin: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: 'chat',
  indexes: [
    {
      name: 'fk_chat_user_idx',
      fields: ['user_iduser'],
    },
    {
      name: 'fk_chat_admin1_idx',
      fields: ['admin_idadmin'],
    },
  ],
});


Chat.belongsTo(user, {
  foreignKey: 'user_isuser',
  as: 'user',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
});

Chat.belongsTo(admin, {
  foreignKey: 'admin_idadmin',
  as: 'admin',
  onDelete: 'NO ACTION',
  onUpdate: 'NO ACTION',
});

module.exports = Chat;