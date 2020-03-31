'use strict';
const bcrypt = require("bcrypt-nodejs");

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING
    }
  }, {});

  User.associate = function(models) {
    // associations can be defined here
  };

  User.beforeCreate(async user => {
    user.password = await new Promise((resolve, reject) => {
      bcrypt.hash(user.password, null, null, function(err, hash) {
        if (err) reject(err);
        resolve(hash)
      });
    });
  });

  User.prototype.isValidPassword = async function(password) {
    return await new Promise((resolve, reject) => {
      bcrypt.compare(password, this.password, (err, result) => {
        if (err) reject(err);
        console.log(result);
        resolve(result);
      })
    });
  };

  return User;
};
