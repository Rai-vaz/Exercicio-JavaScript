const Sequelize = require('sequelize');
const dbConfig = require('../config/database');

const connection = new Sequelize(dbConfig);







const queryInterface = connection.getQueryInterface();


module.exports = queryInterface;