const { Sequelize } = require('sequelize');

// LUEGO DE INSTALAR LA DEPENDENCIA SEQUELIZE INSTANCIAMOS UN NUEVO OBJETO CON EL NOMBRE DE LA DB Y LOS DATOS DE SESION
const sequelize = new Sequelize('foro', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  // EXPORTAMOS LA DB
  module.exports = { sequelize }