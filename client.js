const net = require('net');
const readLine = require('readLine');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '# or $ or this '
});

// ipconfig getifaddr en0

const client = net.createConnection(7890, 'local', () => {
  console.log('im connected');
    
  rl.prompt();
  rl.on('line', line => {
      client.write(line);
      rl.prompt();
  });

});

client.on('data', data => {
  console.log(`\n${data.toString()}`);
  rl.prompt();
});
