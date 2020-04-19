'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    status: DataTypes.INTEGER,
    note: DataTypes.TEXT
  }, {});
  Order.associate = function(models) {
    Order.belongsTo(models.User);
    Order.belongsToMany(models.MenuItem, { through: 'MenuItemOrders' });
  };
  return Order;
};
