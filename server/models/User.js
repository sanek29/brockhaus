module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        id : {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement
        },
        email: {
            type: type.STRING,
            unique: 1
        },
        password: {
            type: type.STRING,
            minlength: 5
        },
        lastname: {
            type: type.STRING,
            maxlength: 50
        }
    })

}

module.exports = { UserModel }