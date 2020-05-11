'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Rooms', [{
      name: 'Johns room',
      description: 'My bedroom',
      image: 'https://source.unsplash.com/JIUjvqe2ZHg',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Living room',
      description: 'My living room',
      image: 'https://source.unsplash.com/17NCG_wOkMY',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Guest room',
      description: 'My guest room',
      image: 'https://source.unsplash.com/gREquCUXQLI',
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Alexs room',
      description: 'My bedroom',
      image: 'https://source.unsplash.com/JIUjvqe2ZHg',
      UserId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Living room',
      description: 'My living room',
      image: 'https://source.unsplash.com/17NCG_wOkMY',
      UserId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Guest room',
      description: 'My guest room',
      image: 'https://source.unsplash.com/gREquCUXQLI',
      UserId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },

    {
      name: 'Bogdans room',
      description: 'My bedroom',
      image: 'https://source.unsplash.com/JIUjvqe2ZHg',
      UserId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Living room',
      description: 'My living room',
      image: 'https://source.unsplash.com/17NCG_wOkMY',
      UserId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Guest room',
      description: 'My guest room',
      image: 'https://source.unsplash.com/gREquCUXQLI',
      UserId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Rooms', null, {});
  }
};
