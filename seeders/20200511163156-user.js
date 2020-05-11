'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      name: 'John',
      email: 'demo@demo.com',
      city: 'New York',
      temperature: 23,
      temperatureMode: 'Eco',
      image: 'https://source.unsplash.com/N2IJ31xZ_ks/500x500',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Doe',
      email: 'Doe@demo.com',
      city: 'Cluj-Napoca',
      temperature: 21,
      temperatureMode: 'Day',
      image: 'https://source.unsplash.com/ToqoQSH-WYQ/500x500',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Alex',
      email: 'alex@demo.com',
      city: 'Baia Mare',
      temperature: 17,
      temperatureMode: 'Night',
      image: 'https://source.unsplash.com/XO25cX2_0iE/500x500',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
