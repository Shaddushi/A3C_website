// Mongodb

const mongoose = require('mongoose');

const host = '127.0.0.1';
const portMongo = '27017';
const db_name = 'comments_db';
const mongoDB = `mongodb://${host}:${portMongo}/${db_name}?retryWrites=true&w=majority`;

mongoose.connect(mongoDB,{useUnifiedTopology:true})
    .then(() => console.log('MongoDB OK !'))
    .catch(() => console.log('MongoDB ERREUR !'));


const db = mongoose.connection;

db.on('error',console.error.bind(console,'MongoDB connection error : '));
