const user = global.context.models['user'];


class UserService{

    constructor (db){
        this.db = db;
    }

    isUserAlreadyExist (login) {
        return this.db.models.users.findOne({where: {login: login}});
    };

    login (credentials){
        return this.db.models.users.findOne({ where: { login: credentials.login } } );
    };

    register (newUser){
        return this.isUserAlreadyExist(newUser.login).then(it => {
            if(it){
                return false;
            }else{
                return user.create(newUser);
            }
        })
    };

    getUser(id){
        return this.db.models.users.findOne({
            where: {
                id: id
            },
            include: [{
                model: this.db.models.lots,
                as: 'lots'
            }]
        });
    }

    deleteUser(id){
        return this.db.models.users.destroy({where: {id: id}});
    }

};

module.exports = {name: 'userService',
                    init: new UserService(global.context.db)};