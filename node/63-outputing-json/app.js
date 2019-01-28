var http = require('http'); // http 
var fs = require('fs');

// Serializing an object through the browser 
http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'application/json'});

  if (req.url === '/') {
    // res.writeHead(200, { 'Content-Type': 'text/html' })
    fs.createReadStream(__dirname + '/index.htm').pipe(res);
  } else if (req.url === '/api') {
    var obj = {
      firstName: 'Alex',
      lastName: 'Chang'
    };

    res.end(JSON.stringify(obj));
  } else {
    res.writeHead(404);
    res.end();
  }
}).listen(3000, '127.0.0.1');

// the cb is an event listener
// stringify the object if ends in api. 



// localhost(internal port) -> '127.0.0.1'
// end - im done sending, this is the last thing sending
// http createServer is given a cb which is turned into an event listener using the event emitter inside the core of Node.js 







// 1) html from file w/ dynamic templates
// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   var html = fs.readFileSync(__dirname + '/index.htm', 'utf8');
//   var message = 'Not Hello World...';
//   html = html.replace('{Message}', message);
//   res.end(html);
// }).listen(4000, '127.0.0.1');


// 2) html from file
// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/html' });
//   var html = fs.readFileSync(__dirname + '/index.htm');
//   res.end(html);
// }).listen(3000, '127.0.0.1');


// 3) for basic text
// http.createServer(function (req, res) {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello Wolrd\n');
// }).listen(1337, '127.0.0.1');
