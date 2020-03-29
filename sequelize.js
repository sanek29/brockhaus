import Sequelize from 'sequelize';
import UserModel from './server/models/User'

const sequelize = new Sequelize('menu_db', 'postgres', '12345', {
    dialect: 'postgres'
});

const User = UserModel(sequelize, Sequelize);

sequelize.sync()
.then(() => {
    console.log('Users db')
});

module.exports = User;