const Sequelize = require('sequelize')
const db = require('../config/database')
const Room = db.define('room', {
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
  description: {
    type: Sequelize.STRING
  },
  image: {
    type: Sequelize.STRING,
    allowNull: false
  },
  // userId: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  //   foreignKey: true
  // }
}, {
  // options
});

module.exports = Room