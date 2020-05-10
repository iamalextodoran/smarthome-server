const Sequelize = require('sequelize')
const db = require('../config/database')
const Device = db.define('device', {
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
  type: {
    type: Sequelize.STRING,
    allowNull: false
  },
  value: {
    type: Sequelize.INTEGER
  },
  warm: {
    type: Sequelize.INTEGER
  },
  // roomId: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  //   foreignKey: true
  // }
}, {
  // options
});

module.exports = Device