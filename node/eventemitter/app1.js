// let Emitter = require('events');
let Emitter = require('./emitter');
let eventConfig = require('./config');

var emtr = new Emitter;

emtr.on(eventConfig.GREET, () => {
  console.log('hello world');
})

emtr.on(eventConfig.GREET, () => {
  console.log("Currently not using the node events emitter!!");
});

emtr.emit(eventConfig.GREET);