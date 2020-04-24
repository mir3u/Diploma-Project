var express = require('express');
const MD5 = require('md5');
var router = express.Router();
const User = require('./Models/User');

const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('register', { title: 'Register' });
});

router.post('/', function(req, res, next) {
    if (!req.body.email || !req.body.password) {
        res.status(401).json({message:'Parameters are missing'})
    } else {
        try {
            let username = req.body.username;
            let email = req.body.email;
            let name = req.body.name;
            let password = req.body.password;
            let encryptedPassword = MD5(MD5(password))

            const user =  User.create({ name: name, username: username, email: email, password: encryptedPassword});
        } catch (error) {
        res.status(401).json({message:'Something went wrong',error:error});
    }

}


    res.render('index', { title: 'Index' });
});

module.exports = router;
