const net = require('net');
const readLine = require('readLine');

const rl = readLine.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: '# or $ or this '
});


const client = net.createConnection(7890, 'local', () => {
    
  rl.prompt();
  rl.on('line', line => {
    client.write(line);
    rl.prompt();
  });

});



client.on('data', data => {
  return (`\n${data.toString()}`);
  
});
