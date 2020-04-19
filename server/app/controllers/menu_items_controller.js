const { MenuItem } = require('../models/index');

exports.list = async (req, res) => {
  const menuItemList = await MenuItem.findAll({
    order: [['id', 'DESC']]
  });

  return res.status(200).json(menuItemList);
};
