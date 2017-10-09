process.title = 'chat-server';
const webSocketsServerPort = 1337;
const webSocketServer = require('websocket').server;
const http = require('http');

let history = ['Initial content'];
let clients = [];

function htmlEntities(str) {
    return String(str)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;')
        .replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

var server = http.createServer(function (request, response) {
    // Not important for us. We're writing WebSocket server,
});
server.listen(webSocketsServerPort, function () {
    console.log((new Date()) + " Server is listening on port "
        + webSocketsServerPort);
});

/**
 * WebSocket server
 */
var wsServer = new webSocketServer({
    httpServer: server
});

wsServer.on('request', function (request) {
    console.log((new Date()) + ' Connection from origin '
        + request.origin + '.');
    // accept connection - you should check 'request.origin' to
    // make sure that client is connecting from your website
    // (http://en.wikipedia.org/wiki/Same_origin_policy)
    const connection = request.accept(null, request.origin);
    const index = clients.push(connection) - 1;
    let userName = false;
    const userColor = false;
    console.log((new Date()) + ' Connection accepted.');
    // send back chat history
    if (history.length > 0) {
        connection.sendUTF(
            JSON.stringify({type: 'history', data: history}));
    }
    // user sent some message
    connection.on('message', function (message) {
        if (message.type === 'utf8') { // accept only text
            // first message sent by user is their name
            if (userName === false) {
                // remember user name
                userName = htmlEntities(message.utf8Data);
                // get random color and send it back to the user
                connection.sendUTF(
                    JSON.stringify({type: 'color', data: userColor}));
                console.log((new Date()) + ' User is known as: ' + userName);
            } else { // log and broadcast the message
                console.log((new Date()) + ' Received Message from '
                    + userName + ': ' + message.utf8Data);

                // we want to keep history of all sent messages
                var obj = {
                    time: (new Date()).getTime(),
                    text: htmlEntities(message.utf8Data),
                    author: userName,
                    color: userColor
                };
                history.push(obj);
                history = history.slice(-100);
                // broadcast message to all connected clients
                var json = JSON.stringify({type: 'message', data: obj});
                for (var i = 0; i < clients.length; i++) {
                    clients[i].sendUTF(json);
                }
            }
        }
    });
    // user disconnected
    connection.on('close', function (connection) {
        if (userName !== false && userColor !== false) {
            console.log((new Date()) + " Peer "
                + connection.remoteAddress + " disconnected.");
            // remove user from the list of connected clients
            clients.splice(index, 1);
            // push back user's color to be reused by another user
            colors.push(userColor);
        }
    });
});