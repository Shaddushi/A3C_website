const Commentary = require("../models/Comments");


module.exports.home = (req,res)=>{
    Commentary.find()
    .then(comments => {
        res.render('pages/home',{comments});
    })
    .catch(error => res.status(4000).send(error))
}

module.exports.redirect = (req,res)=>{
    
    res.redirect('/home');
    
}

module.exports.errorpage = (req,res)=>{
    
    res.render('pages/404page.ejs');
    
}