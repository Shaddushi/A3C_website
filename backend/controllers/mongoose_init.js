// Mongodb

const mongoose = require('mongoose');
require('dotenv').config({ path: "./.env" });
const host = process.env.MONGO_HOST ;
const user = process.env.MONGO_USER ;
const pwd = process.env.MONGO_PWD ;

const portMongo = '27017';
const db_name = 'comments_db';

const mongoDB = `mongodb+srv://${user}:${pwd}@${host}/${db_name}?retryWrites=true&w=majority` ;

mongoose.connect(mongoDB, { useUnifiedTopology: true })
    .then(() => console.log('MongoDB OK !'))
    .catch(() => console.log('MongoDB ERREUR !'));

const db = mongoose.connection;
db.on('error',console.error.bind(console,'MongoDB connection error : '));

