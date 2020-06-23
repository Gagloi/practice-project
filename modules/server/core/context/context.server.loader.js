const glob = require('glob');
const sequelize = require(global.appRoot + '/modules/db/db.connection.manager').sequelize;
const _ = require('lodash');
const bodyParser = require('body-parser');
const initialData = require('../data/init-data.server');
let initContext = function (app){

    global.context = {
        models: {},
        services: {},
        associates: {},
        db: sequelize
    };

    return require(global.appRoot + '/modules/db/db.connection.manager').init().then(() => {
        app.use(bodyParser.json());
        glob.sync(global.appRoot + '/modules/server/core/models/*.js').forEach(function(file){
            let importedModel = require(file);
            global.context.models[importedModel.name] = importedModel.model;
            global.context.associates[importedModel.name] = importedModel.associate;
        });

        glob.sync(global.appRoot + '/modules/server/services/*.js').forEach(function(file){
            let importedModel = require(file);
            global.context.services[importedModel.name] = importedModel.init;
        });

        glob.sync(global.appRoot + '/modules/server/routes/*.js').forEach(function(file){
            require(file)(app);
        });

        Object.keys(global.context.associates).forEach(modelName => {
            if(global.context.associates[modelName]){
                global.context.associates[modelName]();
            }
        });
    });


};
module.exports = initContext;