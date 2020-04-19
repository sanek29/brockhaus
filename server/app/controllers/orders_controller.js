const { Order, MenuItem } = require('../models/index');

exports.list = async (req, res) => {
  const ordersList = await Order.findAll({
    where: { UserId: req.user.id },
    order: [['id', 'DESC']],
    include: [{ model: MenuItem}]
  });

  return res.status(200).json(ordersList);
};

exports.create = async (req, res) => {
  console.log(req.body);

  const order = await Order.create({ note: req.body.note, UserId: req.user.id });
  order.addMenuItems(req.body.menuItemIds);

  const items = await MenuItem.findAll({
    where: { id: req.body.menuItemIds }
  });

  return res.status(200).json({ id: order.id, MenuItems: items });
};
