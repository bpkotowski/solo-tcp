const net = require('net');
const readLine = require('readLine');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '> '
});

// ipconfig getifaddr en0

const client = net.createConnection(7890, 'local', () => {
  console.log('im connected');
    
  rl.prompt();
  rl.on('line', line => {
    console.log(line);
    rl.prompt();
  });

//   client.write('hi im a client');
});

client.on('data', data => {
  console.log('data', data.toString());
});
