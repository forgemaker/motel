var io = require('socket.io').listen(3000);

io.sockets.on('connection', function (socket) {
    socket.emit('welcome', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});