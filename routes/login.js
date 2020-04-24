var express = require('express');
var router = express.Router();
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('register', { title: 'Register' });
});

router.post('/', function(req, res, next) {
    var username = req.body.name;
    console.log(req.body)

    // res.render('register', { title: 'Register' });
});

module.exports = router;
