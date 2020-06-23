const Sequelize = require('sequelize');
const db = global.context.db;
const User = db.define('users', {
        login: {
            type: Sequelize.STRING
        },
        firstName: {
            type: Sequelize.STRING
        },
        lastName: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        }
    },
    {
        schema: 'public',
        tableName: 'users'
    }
);
let associate = () => {
    User.hasMany(global.context.models['lot'], {
        as: 'lots',
        foreignKey: 'ownerId'
    });
};

module.exports = {
    name: 'user',
    model: User,
    associate: associate
};