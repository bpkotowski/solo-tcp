const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md');
const writeStream = fs.createWriteStream('streams-copy.md');
const stream = fs.createReadStream('./2_tcp.md');



// rs.pipe(writeStream)
//   .pipe(stream);


rs.on('data', chunk => {
  writeStream.write(chunk);
});

rs.on('end', data => {
  writeStream.end();

});





