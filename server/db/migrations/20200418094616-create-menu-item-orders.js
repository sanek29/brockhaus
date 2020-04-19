module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable(
      'MenuItemOrders',
      {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        OrderId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        MenuItemId: {
          type: Sequelize.INTEGER,
          primaryKey: true,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }
    );
  },

  down: (queryInterface) => {
    return queryInterface.dropTable('MenuItemOrders');
  },
};
