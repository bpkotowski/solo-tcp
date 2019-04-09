const net = require('net');

const allConnectedClients = [];

const server = net.createServer((client) => {
  
  allConnectedClients.push(client);

  client.on('data', data => {
    client.write(`ECHO FROM SERVER: ${data}`);
  });

});

server.listen(7890);

