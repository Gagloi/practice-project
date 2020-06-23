const express = require('express');
const router = express.Router();

const userService = global.context.services['userService'];
let init = (app) => {

    app.post('/login', (req, res) => {
        userService.login(req.body).then((user) => {
            if(user){
                res.status(200).send('Successfully logged in!');
            }else{
                res.status(400).send('Unauthorized');
            }
        })

    });
    app.route('/user/:id')
        .get((req, res) => {
           userService.getUser(req.params.id).then((user) => {
              res.status(200).send(user);
           });
        })
        .delete((req, res) => {
            userService.deleteUser(req.params.id).then(() => {
                res.status(200).send('User successfully deleted');
            });
        });

};

module.exports = init;