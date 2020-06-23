
const userService = global.context.services['userService'];

let init = (app) => {
    app.post('/register', (req, res) => {
        userService.register(req.body).then((user) => {
            if(user){
                res.status(200).send('User registered!');
            }else{
                res.status(500).send('User already exist!');
            }
        });


    });
};

module.exports = init;