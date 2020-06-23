const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres', 'postgres', 'P@ssw0rd', {
    host: 'localhost',
    dialect: 'postgres',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
});

let init = () => {
    return sequelize
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });
};

module.exports = {init: init, sequelize: sequelize};

