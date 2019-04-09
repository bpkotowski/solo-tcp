const net = require('net');
const readLine = require('readLine');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

rl.prompt();
rl.on('line', line => {
  console.log(line);
  rl.prompt();
});

const client = net.createConnection(7890, 'local', () => {
  console.log('im connected');
    

  client.write('hi im a client');
});


// ipconfig getifaddr en0