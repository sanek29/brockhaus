'use strict';
module.exports = (sequelize, DataTypes) => {
  const MenuItem = sequelize.define('MenuItem', {
    price: DataTypes.FLOAT,
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
  }, {});
  MenuItem.associate = function(models) {
    MenuItem.belongsToMany(models.Order, { through: 'MenuItemOrders' });
  };
  return MenuItem;
};
