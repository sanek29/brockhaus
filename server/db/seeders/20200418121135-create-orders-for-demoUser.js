module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Orders', [
      { id: 1, status: 0, UserId: 1, createdAt: new Date(), updatedAt: new Date() },
      { id: 2, status: 0, UserId: 1, createdAt: new Date(), updatedAt: new Date() }
    ], {});

    return await queryInterface.bulkInsert('MenuItemOrders', [
      { MenuItemId: 1, OrderId: 1, createdAt: new Date(), updatedAt: new Date() },
      { MenuItemId: 2, OrderId: 1, createdAt: new Date(), updatedAt: new Date() },
      { MenuItemId: 3, OrderId: 1, createdAt: new Date(), updatedAt: new Date() },
      { MenuItemId: 2, OrderId: 2, createdAt: new Date(), updatedAt: new Date() },
      { MenuItemId: 3, OrderId: 2, createdAt: new Date(), updatedAt: new Date() },
    ], {});
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete('Orders', null, {});
    await queryInterface.bulkDelete('MenuItemOrders', null, {});
  }
};
