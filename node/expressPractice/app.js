var express = require('express');
var app = express();

var port = process.env.PORT || 3000; // will be to the nevironment var and if not port 3000

app.use('/assets', express.static(__dirname + '/public')); // middleware for static files

app.use('/', (req, res, next) => { // middleware 
  console.log('Req: ' + req.url);
  next();
}); 

app.get('/', (req, res) => {
  res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello World</h1></body></html>')
});

app.get('/users/:userId/books/:bookId', (req, res) => {
  res.send('<html><head></head><body><h1> UserId: ' + req.params.userId + ' Book: ' + req.params.bookId + '</h1></body></html>') // pattern matching, dealing with routes 
});

app.get('/json', (req, res) => {
  res.json({
    firstName: 'Alex',
    lastName: 'Chang',
    address: {
      state: 'New York',
      city: 'New York'
    }
  });
});

// app.get(/p/, function(req, res) { // matches with anything p 
//   res.send("<html><head></head><body><h1>Matching anything with P</h1></body></html>");
// });




app.listen(port);

