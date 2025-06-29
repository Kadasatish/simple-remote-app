const { WebSocketServer } = require('ws');
const wss = new WebSocketServer({ port: 3000 });
wss.on('connection', ws => {
  ws.on('message', data => ws.send(`Received: ${data}`));
});
console.log('Server running on port 3000');
