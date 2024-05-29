const mongoose = require('mongoose');
const commentarySchema = mongoose.Schema({
    name: {type:String,default : "anonymous"},
    comment: {type:String ,required : true}  
});

module.exports = mongoose.model('Commentary',commentarySchema);