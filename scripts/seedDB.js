const mongoose = require('mongoose');
const db = require('../models');
mongoose.Promise = global.Promise;

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/launchpartner", 
    {
        useMongoClient: true
    }
);

const userSeed = [
    {
        userName: 'Scout',
        photo: 'N/A',
        description: 'This is a dog. Little dog that will beg for all the foods',
        date: new Date(Date.new())
    },
    {
        userName: 'Pete',
        photo: 'N/A',
        description: 'This is a dog. This little rodent has one eye, he is not smart',
        date: new Date(Date.new())
    },
    {
        userName: 'Brownie',
        photo: 'N/A',
        description: 'This is a cat. Annoying little thing that will steal your food, thief.',
        date: new Date(Date.new())
    },
];

db.User 
    .remove({})
    .then(() => db.User.collection.insertMany(userSeed))
    .then(data => {
        console.log(data.insertedIds.length + 'records inserted!');
        process.exit(0);
    }) 
    .catch(err => {
        console.error(err);
        process.exit(1);
    });