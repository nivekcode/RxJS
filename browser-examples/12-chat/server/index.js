const webSocketServer = require('websocket').server;
const http = require('http');

const webSocketsServerPort = 1337;
const history = [];
const clients = [];

const server = http.createServer(function (request, response) {
    // Not important for us. We're writing WebSocket server,
});

server.listen(webSocketsServerPort, function () {
    console.log((new Date()) + " Server is listening on port "
        + webSocketsServerPort);
});

const wsServer = new webSocketServer({
    httpServer: server
});

wsServer.on('request', function (request) {
    console.log((new Date()) + ' Connection from origin '
        + request.origin + '.');
    const connection = request.accept(null, request.origin);
    clients.push(connection);
    if (history.length > 0) {
        connection.sendUTF(
            JSON.stringify({type: 'history', data: history}));
    }
    // user sent some message
    connection.on('message', function (message) {
        const usernameAndMessage = JSON.parse(message.utf8Data)
        history.push(usernameAndMessage);
        for (var i = 0; i < clients.length; i++) {
            clients[i].sendUTF(
                JSON.stringify({type: 'history', data: history})
            )
        }
    });

    // user disconnected
    connection.on('close', function (connection) {
        console.log((new Date()) + " Peer "
            + connection.remoteAddress + " disconnected.");
    });
});
