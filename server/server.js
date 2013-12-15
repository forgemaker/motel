var io = require('socket.io').listen(3000);

io.sockets.on('connection', function (socket) {
    socket.emit('welcome message', { title: 'Welcome Motel Socket Server.' });
    socket.on('get order data', function (data) {
        console.log(data);
        // send order data to admin panel
        socket.broadcast.emit('push order data', {
            title: 'You have new order, please check it.'
        });
    });

    socket.on('disconnect', function () {
        io.sockets.emit('user disconnected');
    });
});