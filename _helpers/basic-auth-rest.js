
module.exports = basicAuth;
function basicAuth(req, res, next) {
    var auth = req.headers['authorization'];  
    var Buffer = require('safe-buffer').Buffer
    var _return = {};
    if(!auth) {
        res.statusCode = 401;
        res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
        _return = {
            "status" : "failed",
            "message": "Need some creds son"
        };
        res.end(JSON.stringify(_return));
    }
    else if(auth) {
        var tmp = auth.split(' ');
        var buf = Buffer.from(tmp[1], 'base64');
        var plain_auth = buf.toString(); 
        // console.log("Decoded Authorization ", plain_auth);

        var creds = plain_auth.split(':');
        var username = creds[0];
        var password = creds[1];

        if((username == 'admin') && (password == '123')) {
            next();
        }else {
            res.statusCode = 401; // Force them to retry authentication
            res.setHeader('WWW-Authenticate', 'Basic realm="Secure Area"');
            // res.statusCode = 403;   // or alternatively just reject them altogether with a 403 Forbidden
            _return = {
                "status" : "failed",
                "message": "You shall not pass"
            };
            res.end(JSON.stringify(_return));
        }
    }
};