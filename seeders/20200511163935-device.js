'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Devices', [{
      name: 'Main light',
      type: 'Light',
      description: '',
      RoomId: 1,
      value: 100,
      warm: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Blinds',
      type: 'Blind',
      description: '',
      RoomId: 1,
      value: 20,
      warm: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Windows',
      type: 'Window',
      description: '',
      RoomId: 1,
      value: 0,
      warm: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Main light',
      type: 'Light',
      description: '',
      RoomId: 2,
      value: 100,
      warm: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Blinds',
      type: 'Blind',
      description: '',
      RoomId: 2,
      value: 20,
      warm: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Windows',
      type: 'Window',
      description: '',
      RoomId: 2,
      value: 0,
      warm: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Main light',
      type: 'Light',
      description: '',
      RoomId: 3,
      value: 100,
      warm: 30,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Blinds',
      type: 'Blind',
      description: '',
      RoomId: 3,
      value: 20,
      warm: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Windows',
      type: 'Window',
      description: '',
      RoomId: 3,
      value: 0,
      warm: 0,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Devices', null, {});
  }
};
