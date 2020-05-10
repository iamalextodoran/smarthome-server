const Sequelize = require('sequelize');

module.exports = new Sequelize('smarthome', 'postgres', 'Resetscore#1', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    timestamps: false
}
});