// Server module

class Server {
  constructor() {
    this.subscribers = {};
  }

  subscribe(clientId, targetClientId, eventType) {
    if (!this.subscribers[targetClientId]) {
      this.subscribers[targetClientId] = {};
    }

    if (!this.subscribers[targetClientId][eventType]) {
      this.subscribers[targetClientId][eventType] = [];
    }

    this.subscribers[targetClientId][eventType].push(clientId);
  }

  publish(sourceClientId, eventType, message) {
    const subscribers = this.subscribers[sourceClientId][eventType];

    if (subscribers) {
      subscribers.forEach(clientId => {
        console.log(`[${sourceClientId}] Published a message:`, message);
        console.log(`[${clientId}] Received a message:`, message);
      });
    }
  }
}

function createServer() {
  return new Server();
}

module.exports = {
  createServer,
};
