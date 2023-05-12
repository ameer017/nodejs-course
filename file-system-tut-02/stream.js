const fs = require('fs')
const path = require('path')
const rs = fs.createReadStream(path.join(__dirname, 'new-files', 'lorem.txt'), {encoding: 'utf8'})

const ws = fs.createWriteStream(path.join(__dirname, 'new-files', 'stream.txt'))


// rs.on('data', (chunk) => {
//     console.log(`Received ${chunk.length} bytes of data.`);
//   });
  
//   rs.on('end', () => {
//     console.log('Finished reading data.');
//   });
  
//   rs.on('error', (err) => {
//     console.error(`An error occurred: ${err.message}`);
//   });

  rs.pipe(ws)