'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    temperatureMode: DataTypes.STRING,
    temperature: DataTypes.INTEGER,
    image: DataTypes.STRING,
    city: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    User.hasMany(models.Room);
    User.hasMany(models.Device);
  };
  return User;
};