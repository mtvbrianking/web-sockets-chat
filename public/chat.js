// Connect to server...

var socket = io.connect('http://localhost:4000');

// DOM Elements

var message = document.getElementById('message');
	handle = document.getElementById('handle');
	btn = document.getElementById('send');
	output = document.getElementById('output');

// Events
btn.addEventListener('click', function() {
	socket.emit('chat', {
		message: message.value,
		handle: handle.value
	});
});

// Listen to transmissions
socket.on('chat', function(data) {
	output.innerHTML += '<p><strong>'+data.handle+': </strong>'+data.message+'</p>';
});