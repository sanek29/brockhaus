const { User } = require('../models/index');
const jwt = require('jsonwebtoken');
const { Unauthorized, UnprocessableEntity } = require(`../helpers/api_error`);

require('dotenv').config();

const objectWithoutKey = (object, key) => {
  const {[key]: deletedKey, ...otherKeys} = object;
  return otherKeys;
};

exports.getToken = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) throw new UnprocessableEntity('Both email and password are required');

    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) throw new Unauthorized('Incorrect credentials');

    const isValidPassword = await user.isValidPassword(req.body.password);
    if (!isValidPassword) throw new Unauthorized('Incorrect credentials');

    jwt.sign(user.dataValues, process.env.SECRET, function(err, token) {
      if (err) return res.status(500);
      return res.status(200).json({ token: token, user: objectWithoutKey(user.dataValues, 'password') });
    });
  } catch(error) { next(error) }
};

exports.register = (req, res) => {
  // Registration
  
  const user = new User(req.body);

  user.save((err, doc) => {
    if (err) return res.json({ sucсess: false, err });
    return res.status(200).json({
      sucсess: true
    })
  });
}

exports.currentUser = (req, res) => {
  const token = req.header('Authorization')
    .split(' ')[1];

  const decoded = jwt.verify(token, process.env.SECRET);

  jwt.verify(token, process.env.SECRET, async function(err, decoded) {
    const user = await User.findOne({ where: { id: decoded.id } });

    return res.status(200).json({ user: objectWithoutKey(user.dataValues, 'password') });
  });
};
