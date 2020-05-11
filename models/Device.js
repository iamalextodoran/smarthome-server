'use strict';
module.exports = (sequelize, DataTypes) => {
  const Device = sequelize.define('Device', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    value: DataTypes.INTEGER,
    warm: DataTypes.INTEGER
  }, {});
  Device.associate = function(models) {
    Device.belongsTo(models.Room);
  };
  return Device;
};