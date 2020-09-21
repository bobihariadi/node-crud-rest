
var jwt = require('jsonwebtoken');
var config = require('../config');

module.exports = bearerAuth;
function bearerAuth(req, res, next){
    var auth = req.headers['authorization'];  
    var _return = {};
    if(!auth) {
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'Bearer realm="Secure Area"');
        _return = {
            "status" : "failed",
            "message": "Need some creds son"
        };
        res.end(JSON.stringify(_return));
    }
    else if(auth) {
        var tmp = auth.split(' ');
        var token = tmp[1];
               
        jwt.verify(token, config.secret, function(err, decoded) {
            if (err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
              
            req.session.arrdata = decoded;
            next();
        });

    }
}