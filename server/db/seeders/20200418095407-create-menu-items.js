'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('MenuItems', [{
      id: 1,
      price: 10,
      title: 'Classic Chicken Teriyaki',
      description: 'Soy sauce, boneless chicken breasts, short grain rice, italian frying pepper',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 2,
      price: 15.20,
      title: 'Beef Plov',
      description: 'Beef stew meat, long grain rice, carrots, olive oil, garlic',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      id: 3,
      price: 12.50,
      title: 'Ukrainian Red Borscht',
      description: 'Ribs, tomato sauce, dill, beet, chicken broth, red bell pepper, carrots, onion, potato',
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('MenuItems', null, {});
  }
};
