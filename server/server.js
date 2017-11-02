const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

const clients = [];

var userName = false;
var imageUser = false;

io.on('connection', function(socket){
    console.log('connection')
    clients.push(socket);

    var userName = false;
    var imageUser = false;

    socket.on('user info', function(data){
        if (!userName || !imageUser) {
            userName = data.username;
            imageUser = data.image;
            io.emit('connected user', {id:socket.id ,userName, imageUser})
        }
    });

    socket.on('chat message', function(data){
        let {text} = data;
        console.log('chat message user', data)
        io.emit('chat message', {text, imageUser})
    });

    socket.on('disconnect', function() {
        console.log('Got disconnect!');
  
        io.emit('disconnect', socket.id)

        var i = clients.indexOf(socket);
        clients.splice(i, 1);
     });
});

http.listen(4200, function(){
    console.log('listening on *:4200');
});