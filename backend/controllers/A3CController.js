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
    res.redirect('/Home');
}

module.exports.errorpage = (req,res)=>{
    
    res.render('pages/404page.ejs');
    
}

module.exports.MyUnisoft = (req,res)=>{
    res.render('pages/MyUnisoft.ejs')
}

module.exports.tools = (req,res)=>{
    res.render('pages/tools.ejs')
}

//to create a commentary
module.exports.create = async (req,res)=>{
    let i = 0;
    Commentary.find()
    .then(comments => {
        comments.forEach(element => {
            if(element.comment === req.body.comment){
                i ++;
            }
        });

    })

    // Yes it's rigged what about it ?

    if(!(!req.body) && i < 3 &&(req.body.note >=3 ||req.body.note === "")){
        let {name,comment,note} = req.body
        if(note === ""){
            if(name === ""){
                if(comment === ""){
                    //vraiment au cas ou
                    ;
                }
                else{
                    const commentary = new Commentary({
                        ...{content},
                    })
                    commentary.save();
                }
            }
            else{
                if(comment === ""){
                    const commentary = new Commentary({
                        ...{name},
                    })
                    commentary.save();
                }
                else{
                    const commentary = new Commentary({
                        ...{name,comment},
                    })
                    commentary.save();
                }
                
            }
           
        }
        else{
            if(name === ""){
                if(comment === ""){
                    const commentary = new Commentary({
                        ...{note},
                    })
                    commentary.save();
                }
                else{
                    const commentary = new Commentary({
                        ...{note,comment},
                    })
                    commentary.save();
                }
            }
            else{
                if(comment === ""){
                    const commentary = new Commentary({
                        ...{name,note},
                    })
                    commentary.save();
                }
                else{
                    const commentary = new Commentary({
                        ...{name,comment,note},
                    })
                    commentary.save();
                }
            }
        }
    }
    res.redirect('/home')
}

