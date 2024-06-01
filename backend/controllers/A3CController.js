//const comments = require("../models/Comments");


module.exports.home = (req,res)=>{
    
    res.render('pages/home');
    
}

module.exports.redirect = (req,res)=>{
    
    res.redirect('/home');
    
}

module.exports.errorpage = (req,res)=>{
    
    res.render('pages/404page.ejs');
    
}