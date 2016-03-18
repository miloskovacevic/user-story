var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./config.js');
var mongoose = require('mongoose');

mongoose.connect(config.database, function(err){
	if(err){
		console.log(err);
	} else {
		console.log('Connected to the database!');
	}
});

var app = express();

//config and shit...
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(morgan("combined"));


var api = require('./app/routes/api')(app, express);
app.use('/api', api);


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







