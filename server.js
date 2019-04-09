const net = require('net');

const allConnectedClients = [];

const server = net.createServer((client) => {
  console.log('client created');
  allConnectedClients.push(client);
  //   client.on('data', data => {
  //     //   console.log(data.toString());
  //   });
  client.on('data', data => {
    client.write(`ECHO FROM SERVER: ${data}`);
  });

});

server.listen(7890);

