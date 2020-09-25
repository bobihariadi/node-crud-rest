const express = require('express');
var app = express();
const bodyparser = require('body-parser');
const cors = require('cors');

const session = require('express-session');

const static = require('./routes/static');
const jwt = require('./routes/jwt');
const basic = require('./routes/basic');
const bearer = require('./routes/bearer');


app.use(bodyparser.json());
app.use(cors());

// set express session
app.use(session({
    secret: 'bobihariadi_key',
    resave: true,
    saveUninitialized: true,
    cookie: { 
        secure: false,
        maxAge : 24 * 60 * 60 * 1000
     }
  }));

// router static data
app.use('/static', static);

// router register jwt
app.use('/v1', jwt);

// router for basic auth
app.use('/basic', basic);

// router for bearer auth
app.use('/bearer', bearer);

// listener
app.listen(3000, () => console.log('Express running on port 3000'));