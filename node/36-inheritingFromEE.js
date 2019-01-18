
// // Any objects created with greetr should also have access to prototype property of the Event Emitter giving
// // it access to its methods and properties. 


var EventEmitter = require('events');
var util = require('util');


function Greetr() {
  EventEmitter.call(this);
  this.greeting = 'Hello';
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function (data) {
  console.log(this.greeting + ' ' + data);
  this.emit('greet', data); // the emit method, second paramater is data that can be passed 
}

var greeter1 = new Greetr();

greeter1.on('greet', (data) => {
  console.log('Inside the Event Emitter methods' + ' my name is:' + data)
});

greeter1.greet('Alejandro');