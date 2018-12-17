var express = require('express');
var socket = require('socket.io');

// Bootstrap express

var app = express();

var server = app.listen(4000, function(){
	console.log('listening on *:4000');
});

// Static files

app.use(express.static('public'));

// Bootstrap socket.io

var io = socket(server);

io.on('connection', function(socket) {
	console.log(socket.id+' -> connected');
	socket.on('disconnect', function(){
    	console.log(socket.id+' -> disconnected');
  	});
});