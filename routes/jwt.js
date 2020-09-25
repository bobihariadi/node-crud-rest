const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const  jwt = require('jsonwebtoken');
const config = require('../config');

router.post('/register', (req, res) => {
    var hashedPassword = bcrypt.hashSync(req.body.password, 8);
    
    var arrData = {
      name : req.body.name,
      email : req.body.email,
      password : hashedPassword
    }
    // create a token
    var token = jwt.sign(arrData, config.secret, {
    expiresIn: 86400 // expires in 24 hours
    });
    res.status(200).send({ auth: true, token: token });
})

module.exports = router