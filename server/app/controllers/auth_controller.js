const { User } = require('../models/index');
const jwt = require('jsonwebtoken');
const { Unauthorized, UnprocessableEntity } = require(`../helpers/api_error`);

require('dotenv').config();

exports.getToken = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) throw new UnprocessableEntity('Both email and password are required');

    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) throw new Unauthorized();

    const isValidPassword = await user.isValidPassword(req.body.password);
    if (!isValidPassword) throw new Unauthorized();

    jwt.sign(user.dataValues, process.env.SECRET, function(err, token) {
      if (err) return res.status(500);
      return res.status(200).json({ token: token });
    });
  } catch(error) { next(error) }
};

exports.register = (req, res) => {
  
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ sucсess: false, err });
    return res.status(200).json({
      sucсess: true
    })
  })
};
