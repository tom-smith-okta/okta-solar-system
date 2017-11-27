// Okta Access Management

////////////////////////////////////////////////////
global.__base = __dirname + '/';

// var config = require(__base + ".env.js");

const express = require('express');

///////////////////////////////////////////////////

// SET UP WEB SERVER
const app = express();

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3090');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

require(__base + 'routes.js')(app);

var port = process.env.PORT || 5000;

app.listen(port, function () {
	console.log('App listening on port ' + port);
});