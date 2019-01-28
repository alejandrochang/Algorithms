var http = require('http');
var fs = require('fs');

// not using a stream

// http.createServer(function(req, res) {
//   res.writeHead(200, {'Content-Type': 'text/html' });
//   var html = fs.readFileSync(__dirname + '/index.htm');
//   res.end(html);

// }).listen(1337, '127.0.0.1');




// simplified (more efficient using streams)
http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html' });
  fs.createReadStream(__dirname + '/index.htm').pipe(res);
}).listen(1337, '127.0.0.1');

// every chunk from the file will be buffered then piped to the http response stream.