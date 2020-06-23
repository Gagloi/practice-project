let users = [
    {
        login: "Yaroslav",
        password: "password",
        firstName: "Yaroslav",
        lastName: "Piven"
    },
    {
        login: "hacker",
        password: "password",
        firstName: "Marko",
        lastName: "Polo"
    }];

let lots = [
    {
        price: 12000,
        name: "Volkswagen Passat",
        description: "A car",
        ownerId: 1,
        finishDate: new Date() + (60 * 60 * 60)
    },
    {
        price: 1000,
        name: "Lenovo Legion",
        description: "A Notebook",
        ownerId: 1,
        finishDate: new Date() + (60 * 60 * 60)
    },
    {
        price: 120000,
        name: "Nissan GTR",
        description: "A sport car",
        ownerId: 2,
        finishDate: new Date() + (60 * 60 * 60)
    },
    {
        price: 1200,
        name: "Asus ROG Strix",
        description: "Gaming Notebook",
        ownerId: 2,
        finishDate: new Date() + (60 * 60 * 60)
    }
];


module.exports = {
    users: users,
    lots: lots
};