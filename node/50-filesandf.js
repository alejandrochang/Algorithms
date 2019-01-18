
var fs = require('fs'); // gets the fs object

var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');
console.log(greet);


var greet2 = fs.readFile(__dirname + "/greet.txt", 'utf8',
function(err, data){
  if (!err) {
    console.log(data);
  }
});

console.log('Done');

// Result: 
// Hello World from Text File
// Done
// Hello World from Text File

// __dirname gives you the path to the directory that you're text file is located in. 
// __dirname + '/greet.txt' -> whole thing together is the path to the hardrive to .greet.txt
// readSync is given a buffer 


// asynchronous readFile uses error-first callback, a cb that takes an error cb as the first parameter. 

// if you don't encode your data you'll just get back your data in the buffer.