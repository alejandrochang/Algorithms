var fs = require('fs');
var zlib = require('zlib');

var readable = fs.createReadStream(__dirname + '/greet.txt');

var writable = fs.createWriteStream(__dirname + '/greetcopy.txt');

var compressed = fs.createWriteStream(__dirname + '/greet.txt.gz');

var gzip = zlib.createGzip();

readable.pipe(writable);
readable.pipe(gzip).pipe(compressed);

// simple way to send the readable data to the writabel return area.
// files a particular type of stream we're working with 
// zlib allows us to import a .zip(gzips) file (algo for compressing files)


// for more documentation vist Node.js examples