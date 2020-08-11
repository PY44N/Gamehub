var express = require('express');
var app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/login.html'); 
});

http.listen(3000, '0.0.0.0', () => {
    console.log('listening on *:3000');
  });

  io.on('connection', function(socket) {
    console.log('new user connected')
    
  })