const port = process.env.PORT || 3001
const express = require('express');
const app = express();

// dossier public (pour le css, etc.)
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// définition du view engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // npm install --save ejs
const expressLayouts = require('express-ejs-layouts'); //npm install express-ejs-layouts
app.use(expressLayouts);
app.set('layout', '../views/layouts/layout') ; // définit le layout par défaut

app.use(express.json());
app.use(express.urlencoded({extended:false}));

require("./controllers/mongoose_init")


// --- ROUTAGE ---

const homeRouter = require('./routes/A3CRouter')
app.get('/', function(req, res) {
    res.redirect('/Home');
   });
app.use('/Home', homeRouter)
app.use('*', homeRouter)
// -- LANCEMENT DU SERVEUR ---
app.listen(port, ()=>{
    console.log(`Le server écoute sur http://127.0.0.1:${port}`);
}) ;