const fs = require('fs');

const ws = fs.createWriteStream('./spot.json', {
  flags: 'a'
});


ws.write('{');
ws.write('\n\t');
ws.write('"name:" "george"');
ws.write('"age:" "5"');
ws.write('}');

ws.end();


