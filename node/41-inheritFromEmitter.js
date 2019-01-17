'use strict';

var EventEmitter = require('events');
// var util = require('util');

class Greetr extends EventEmitter {
  constructor() {
    super(); // calling parent of the constructor, inherits
    this.greeting = 'Hello World';
  }

  greet(data) {
    console.log(`${this.greeting}: ${data}`);
    this.emit('greet', data);
  }
}

var greeter1 = new Greetr;

greeter1.on('greet', () => {
  console.log('Inside the event helper');
})

greeter1.greet('Tony');
// function Greetr() {
//   EventEmitter.apply(this); // by using super() we call on the parents constructor
//   this.greeting = 'Hello World';
// }