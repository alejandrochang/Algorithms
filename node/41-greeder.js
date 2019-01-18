'use strict';

let EventEmitter = require('events');

module.exports = class Greetr extends EventEmitter {
  constructor() {
    super(); // calling parent of the constructor, inherits
    this.greeting = "Hello World";
  }

  greet(data) {
    console.log(`${this.greeting}: ${data}`);
    this.emit("greet", data);
  }
}
