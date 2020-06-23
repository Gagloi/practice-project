global.appRoot = __dirname;

const http = require("http");
const express = require('express');
const app = express();
const initContext = require('./modules/server/core/context/context.server.loader');
const initialData = require('./modules/server/core/data/init-data.server');

const hostname = "127.0.0.1";
const port = 8081;


initContext(app).then(() => {
    app.route('/*')
        .get((req, res) => {
        });

// Create HTTP server
    const server = http.createServer(app);

// Prints a log once the server starts listening
    server.listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}).then(() => {
    initialData.users.forEach((user) => {
        global.context.services['userService'].register(user);
    });
    initialData.lots.forEach((lot) => {
        global.context.services['lotService'].createLot(lot);
    });
});