const mongoose = require('mongoose');
const commentarySchema = mongoose.Schema({
    name: {type:String,default : "Anonyme"},
    comment: {type:String ,default : "Aucun commentaire spécifié"},
    note: {type:Number,default : 5}
});

module.exports = mongoose.model('Commentary',commentarySchema);