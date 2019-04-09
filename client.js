const net = require('net');

const client = net.createConnection(7890, 'local', () => {
  console.log('im connected');
  client.write('hi im a client');
});


// ipconfig getifaddr en0