let fs = require('fs');

// let readable = fs.createReadStream(__dirname + '/greet.txt'); // return buffer
// let readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8'}); // returns whole text
let readable = fs.createReadStream(__dirname + '/greet.txt', { encoding: 'utf8', highWaterMark: 32 * 1024 }); 
// returns whole text in 32 kb slices (you can manipulate this based on your needs)

// give the read stream object

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

// readable.on('data', function(chunk) {
//   console.log(chunk); // chunk.length
// });


readable.on('data', function(chunk) {
  // console.log(chunk);
  writable.write(chunk);
   // copying over data
});

// listen to the event 'data' 
// A file stream by default 64 kilobytes = 1 buffer

// 1 kilobyte = 1024 bytes