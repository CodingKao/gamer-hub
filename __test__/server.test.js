const { createServer } = require('../server');

describe('Server', () => {
  let server;

  beforeEach(() => {
    server = createServer();
  });

  afterEach(() => {
    server = null;
  });

  test('should subscribe a client to an event', () => {
    server.subscribe('client1', 'client2', 'message');
    const subscribers = server.subscribers['client2']['message'];
    expect(subscribers).toContain('client1');
  });

  test('should publish a message to subscribed clients', () => {
    const publishSpy = jest.spyOn(console, 'log').mockImplementation();

    server.subscribe('client1', 'client2', 'message');
    server.subscribe('client1', 'client3', 'message');
    server.subscribe('client2', 'client3', 'message');

    server.publish('client1', 'message', 'Hello, clients!');

    expect(publishSpy).toHaveBeenCalledWith('[client1] Published a message:', 'Hello, clients!');
    expect(publishSpy).toHaveBeenCalledWith('[client2] Received a message:', 'Hello, clients!');
    expect(publishSpy).toHaveBeenCalledWith('[client3] Received a message:', 'Hello, clients!');

    publishSpy.mockRestore();
  });

  // Add more test cases as needed
});
