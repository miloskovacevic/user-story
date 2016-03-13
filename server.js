var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config.js');

var app = express();

//config and shit...
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(morgan("combined"));

app.get('*', function(req, res){
	res.sendFile(__dirname + '/public/views/index.html');
});

app.listen(config.port, function(err){
	if(err){
		console.log(err);
	} else {
		console.log('Listenning on port 3000...');
	}
});







