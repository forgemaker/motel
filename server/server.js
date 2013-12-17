var io = require('socket.io').listen(443, {log: false});

io.sockets.on('connection', function (socket) {
    socket.emit('welcome message', { title: 'Welcome Motel Socket Server.' });
    socket.on('get order data', function (data) {
        console.log(data);
        // send order data to admin panel
        socket.broadcast.emit('push order data', data);
    });

    socket.on('disconnect', function () {
        io.sockets.emit('user disconnected');
    });
});
