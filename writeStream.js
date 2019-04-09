const fs = require('fs');

const ws = fs.createWriteStream('./spot.json');

//write dog to spot json,

ws.write();
ws.write();
ws.write();

ws.end();


