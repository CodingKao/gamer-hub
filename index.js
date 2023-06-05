'use strict';

const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);

const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  // Broadcast a message to all connected users when someone connects
  io.emit('chat message', 'A user has connected');

  socket.on('chat message', (msg) => {
    io.emit('chat message', msg);
  });

  socket.on('disconnect', () => {
    // Broadcast a message to all connected users when someone disconnects
    io.emit('chat message', 'A user has disconnected');
  });
});

server.listen(PORT, () => {
  console.log('listening on:', PORT);
});
