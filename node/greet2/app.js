
var greet = require('./greet1');
greet();

// var greet2 = require('./greet2').greet;
// greet2();

var greet2 = require('./greet2');
greet2.greet();


var greet3 = require('./greet3');
greet3.greet();
greet3.greeting = 'Changed World';

var greet3b = require('./greet3');
greet3b.greet();

var Greet4 = require('./greet4');
let newGreet = new Greet4();
newGreet.greet();

var greet5 = require('./greeting5');
greet5.greet();