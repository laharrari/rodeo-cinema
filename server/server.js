const express = require('express');
const socketio = require('socket.io');
const router = require('./router');

const { userJoin, userLeave, getUser, getTheaterUsers } = require('./utils/user');
const formatMessage = require('./utils/messages');

const app = express();
const server = require('http').createServer();
// NECESARRY TO FIX: cors policy: no 'access-control-allow-origin' header
const options = { cors:true };
const io = require('socket.io')(server, options);

app.use(router);

io.on('connection', socket => {
    socket.on('joinTheater', ({ name, theater }, callback) => {
        const { error, user } = userJoin({ id: socket.id, name, theater });

        if (error) {
            return callback(error);
        }
        
        socket.emit('message', { user: 'Admin', text: `${user.name}, welcome to theater: ${user.theater}.`});

        socket.broadcast.to(user.theater).emit('message', { user: 'Admin', text: `${user.name} has joined!` });

        socket.join(user.theater);

        callback();
    });

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id);

        io.to(user.theater).emit('message', { user: user.name, text: message });

        callback();
    });

    socket.on('disconnect', () => {
        const user = userLeave(socket.id);

        if (user) {
            io.to(user.theater).emit('message', { user: 'Admin', text: `${user.name} has left!` });
        }
    });
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server has started on port ${PORT}`));