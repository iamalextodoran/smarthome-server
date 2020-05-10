const Sequelize = require('sequelize')
const db = require('../config/database')
const User = db.define('user', {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: Sequelize.INTEGER
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING
  },
  temperatureMode: {
    type: Sequelize.STRING,
    allowNull: false
  },
  temperature: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  // options
});

module.exports = User