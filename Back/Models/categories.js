const { DataTypes } = require('sequelize');
const sequelize=require('../database/index.js')

const Categories=sequelize.define('categorie',{
    idcategorie:{
        type:DataTypes.INTEGER,
        autoIncrement:true,
        primaryKey:true,
    },
    categorieName:{
        type:DataTypes.STRING(45),
        allowNull:true,
    },
    categorieImage:{
        type:DataTypes.TEXT,
        allowNull:true,
    },
    categorieDescription:{
        type:DataTypes.TEXT,
        allowNull:true,
    },
    categorieType:{
        type:DataTypes.STRING(45),
        allowNull:true,
    },
},{
    tableName:'categorie'
})
module.exports= Categories