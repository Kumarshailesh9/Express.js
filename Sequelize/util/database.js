const Sequelize = require('sequelize');

const sequelize = new Sequelize('sys', 'root', 'Realme@333', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;