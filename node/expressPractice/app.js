var express = require('express');
var app = express();
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');
var port = process.env.PORT || 3000; // will be to the nevironment var and if not port 3000


// mongoose code 
var mongoose = require('mongoose');

// console.log(process.env.MONGO_ATLAS_PW);

// connecting to the db
mongoose.connect(
  "mongodb://changalejandro:Coding2018@ds161255.mlab.com:61255/bookaddress",
  { useNewUrlParser: true },
);

const Schema = mongoose.Schema;

const personSchema = new Schema({
  firstname: String,
  lastname: String,
  address: String,
});

var Person = mongoose.model('Person', personSchema);

var john = Person({
  firstname: 'John',
  lastname: 'Doe',
  address: '555 Main St.'
});

var jane = Person({
  firstname: 'Jane',
  lastname: 'Doe',
  address: '555 Main St.'
});

john.save(function(err) {
  if (err) throw err;

  console.log('Person was saved');
})

jane.save(function(err) {
  if (err) throw err;

  console.log('Person was saved');
})

app.use('/assets', express.static(__dirname + '/public')); // middleware for static files

app.use('/', (req, res, next) => { // middleware 
  console.log('Req: ' + req.url);

  Person.find({}, function(err, users) {
    if (err) throw err;
    console.log(users); // obj of all users 
  });

  next();
}); 


apiController(app); // passed by reference: adds the GET, POST, DELETE
htmlController(app); // passed for get request on html

app.listen(port);

