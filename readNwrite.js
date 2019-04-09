const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md');
const writeStream = fs.createWriteStream('streams-copy.md');

rs.pipe();


rs.on('data', chunk => {
  writeStream.write(chunk);
});

rs.on('end', data => {
  writeStream.end();

});





