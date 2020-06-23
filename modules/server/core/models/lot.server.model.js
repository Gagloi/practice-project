const Sequelize = require('sequelize');
const db = global.context.db;
const Lot = db.define('lots', {
        ownerId:{
            type: Sequelize.INTEGER,
            foreignKey: true
        },
        price:{
            type: Sequelize.INTEGER
        },
        name:{
            type: Sequelize.STRING
        },
        description:{
            type: Sequelize.TEXT
        },
        finishDate:{
            type:Sequelize.DATE
        }
    },
    {
        schema: 'public',
        tableName: 'lots'
    });
let associate = () => {
    Lot.belongsTo(global.context.models['user'], {
        foreignKey: 'ownerId',
        as: 'owner'
    });
};
module.exports = {
    name: 'lot',
    model: Lot,
    associate: associate
};
