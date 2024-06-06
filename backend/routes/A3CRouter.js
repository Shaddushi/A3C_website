var express = require('express');
var router = express.Router();


const A3CController = require('../controllers/A3CController')
router.get('/', A3CController.redirect);
router.get('/Home', A3CController.home);
router.get('/more/MyUnisoft',A3CController.MyUnisoft);
router.get('/more/tools',A3CController.tools);
router.post('/add', A3CController.create);
router.get('*', A3CController.errorpage);

module.exports = router;