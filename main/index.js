// Import modules
const { createServer } = require('./server');
const { createClient } = require('./client');

// Create a server instance
const server = createServer();

// Create client instances
const client1 = createClient('Player1');
const client2 = createClient('Player2');

// Connect clients to the server
client1.connect(server);
client2.connect(server);

// Subscribe clients to events
client1.subscribe('Player2', 'message');
client2.subscribe('Player1', 'message');

// Publish messages
client1.publish('message', 'Hello, Player2!');
client2.publish('message', 'Hi, Player1!');
