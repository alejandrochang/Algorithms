// var Emmiter = require('./emitter'); // manually created event emitter
var Emmiter = require('events'); // internal node even emitter

let eventConfig = require('./config').events;
var emtr = new Emmiter;

emtr.on(eventConfig.GREET, () => {
  console.log('Someone said hello!')
});

emtr.on(eventConfig.GREET, () => {
  console.log("Another listener, using the Node Event emitter");
});

emtr.emit(eventConfig.GREET);