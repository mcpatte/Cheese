var express = require("express");
var bodyParser = require("body-parser");
// var OAuthServer = require("express-oauth-server");
var db = require('./db/db.js');

var app = express();

// var oauth = new oauthServer({ model: {} });
// var io = require("socket.io")(app);
// //app.use(express.static(__dirname + '/public'));
// app.use(oauth.authenticate());
app.use(bodyParser.json());

//RUN SERVER
var server = app.listen(process.env.PORT || 3000, function() {
	var port = server.address().port;
	console.log("App now running on port " + port);
});

//ERROR HANDLING
function handleError(res, error, message, code) {
  console.log("ERROR: " + error);
  res.status(code || 500).json({"error": message});
};

//GETS TASKS
app.get('/tasks', function(req, res) {
	db.collection('tasks').find({}).toArray(function(err, data) {
		err ? handleError(res, err.message, 'Failed to get tasks') : res.status(200).json(data);
	})
});

//POSTS TASKS
app.post('/tasks', function(req, res) {
	var newTask = req.body;

  //If no name task name is provided
	if (!req.body.task) {
    handleError(res, 'Blank task name', 'Must provide task name', 400);
	}

	db.collection('tasks').insertOne(newTask, function(err, data) {
		err ? handleError(res, err.message, 'Failed to create task') : res.status(201).json(data);
	});
});









// io.on('connection', function(socket) {
// 	socket.on('tasks', function(task) {
// 		io.emit('tasks', task);
// 	})
// })





// //Schema
// /*
// {
// 'name': String,
// 'description': String,
// 'points': Number
// }
// */