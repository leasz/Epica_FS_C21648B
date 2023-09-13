const { sequelize } = require('../../database')

const { DataTypes } = require('sequelize')

// DEFINE LAS TABLAS DE LA DB
const PostModel = sequelize.define('posts', {
    author: DataTypes.STRING,
    tittle: DataTypes.STRING,
    content: DataTypes.TEXT
})

// DEFINIMOS UNA TABLA PARA LOS USUARIOS
const UserModel = sequelize.define('users', {
    author: DataTypes.STRING,
    email: DataTypes.STRING,
    avatar: DataTypes.STRING
})

module.exports = { PostModel, UserModel }