// Connect to server...

var socket = io.connect('http://localhost:4000');

// DOM Elements

var message = document.getElementById('message');
	handle = document.getElementById('handle');
	btn = document.getElementById('send');
	output = document.getElementById('output');
	feedback = document.getElementById('feedback');

// Events
btn.addEventListener('click', function() {
	socket.emit('chat', {
		message: message.value,
		handle: handle.value
	});
});

message.addEventListener('keypress', function() {
	socket.emit('typing', handle.value);
});

// Listen to typing event
socket.on('typing', function(handle) {
	feedback.innerHTML = '<p><em>'+handle+': typing...</em></p>';
});

// Listen to transmissions
socket.on('chat', function(data) {
	feedback.innerHTML = '';
	output.innerHTML += '<p><strong>'+data.handle+': </strong>'+data.message+'</p>';
	message.value = '';
});
