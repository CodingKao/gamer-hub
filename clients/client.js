// Client module

class Client {
  constructor(clientId) {
    this.clientId = clientId;
    this.server = null;
  }

  connect(server) {
    this.server = server;
  }

  subscribe(targetClientId, eventType) {
    if (this.server) {
      this.server.subscribe(this.clientId, targetClientId, eventType);
    }
  }

  publish(eventType, message) {
    if (this.server) {
      this.server.publish(this.clientId, eventType, message);
    }
  }
}

function createClient(clientId) {
  return new Client(clientId);
}

module.exports = {
  createClient,
};
