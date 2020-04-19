'use strict';

const bcrypt = require("bcrypt-nodejs");

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [{
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'demo@demo.com',
      isAdmin: false,
      password: bcrypt.hashSync('abc'),
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      firstName: 'Admin',
      lastName: 'Doe',
      email: 'admin@demo.com',
      password: bcrypt.hashSync('abc'),
      isAdmin: true,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
