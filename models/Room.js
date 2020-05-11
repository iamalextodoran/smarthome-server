'use strict';
module.exports = (sequelize, DataTypes) => {
  const Room = sequelize.define('Room', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    image: DataTypes.STRING
  }, {});
  Room.associate = function (models) {
    Room.hasMany(models.Device);
    Room.belongsTo(models.User);
  };
  return Room;
};