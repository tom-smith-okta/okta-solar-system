// Okta Access Management

////////////////////////////////////////////////////
global.__base = __dirname + '/';

// var config = require(__base + ".env.js");

const express = require('express');

///////////////////////////////////////////////////

// SET UP WEB SERVER
const app = express();

require(__base + 'routes.js')(app);

var port = process.env.PORT || 5000;

app.listen(port, function () {
	console.log('App listening on port ' + port);
});