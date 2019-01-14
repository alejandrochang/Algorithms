var Emmiter = require('./emitter');
var emtr = new Emmiter;

emtr.on('greet', () => {
  console.log('Someone said hello!')
});

emtr.on('greet', () => {
  console.log('Another listener');
});

emtr.emit('greet');