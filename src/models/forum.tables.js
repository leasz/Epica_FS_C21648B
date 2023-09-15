//IMPORTA LA INSTANCIA SEQUELIZE GENERADA EN DATABASE
const { sequelize } = require('../../database')
// IMPORTA LOS TIPOS DE SQL A TRAVES DE SEQUELIZE
const { DataTypes } = require('sequelize')

// DEFINE LAS TABLAS DE LA DB
const PostModel = sequelize.define('posts', {
    author: DataTypes.STRING,
    title: DataTypes.STRING,
    content: DataTypes.TEXT,
    imgURL: DataTypes.STRING
})

module.exports = {PostModel}