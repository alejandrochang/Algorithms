const webSocketServerPort = 8000;
const webSocketServer = require('websocket').server;
const http = require('http');

const server = http.createServer();
server.listen(webSocketServerPort);
console.log('listening on port 8000');

const wsServer = new webSocketServer({
  httpServer: server,
});

const clients = {};

const getUniqueId = () => {
  return Math.floor((1 + Math.random())).toString(16).substring(1);
}

wsServer.on('request', function (request) {
  let userID = getUniqueId();
  console.log({ userID });

  const connection = request.accept(null, request.origin);
  clients[userID] = connection;
})