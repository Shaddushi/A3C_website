var express = require('express');
var router = express.Router();


const A3CController = require('../controllers/A3CController')
router.get('/', A3CController.home);

module.exports = router;