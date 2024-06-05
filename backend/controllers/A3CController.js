const Commentary = require("../models/Comments");


module.exports.home = (req,res)=>{

    

    Commentary.find()
    .then(comments => {
        let i = 0;
        let tab = new Set([])
        if(comments.length < 6){
            res.render('pages/home',{comments});
        }
        else{
            while(i < 6 ){
                let a = Math.floor(Math.random() * (comments.length ));
                if(!(tab.has(comments[a]))){
                    tab.add(comments[a]);
                    i++;
                }
            }
            comments = tab
            res.render('pages/home',{comments});
        }

        
    })
    .catch(error => res.status(4000).send(error))
}

module.exports.redirect = (req,res)=>{
    
    res.redirect('/home');
    
}

module.exports.create = async (req,res)=>{
    
    const {name,comment,note} = req.body;
    const commentary = new Commentary({
        name: name,
        comment:comment,
        note:note
    })
    commentary.save();

    res.redirect('/home');
}

module.exports.errorpage = (req,res)=>{
    
    res.render('pages/404page.ejs');
    
}