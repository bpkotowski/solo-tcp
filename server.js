const net = require('net');

const server = net.createServer((client) => {
  console.log('client created');
  client.on('data', data => {
      console.log(data.toString());
  });
});

server.listen(7890);

