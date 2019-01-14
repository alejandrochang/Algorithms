// function Emitter() {
//   this.events = {};
// }

// // create a new property on that object and make sure its an arr
// Emitter.prototype.on = function(type, listener) {
//   this.events[type] = this.events[type] || [];
//   this.events[type].push(listener);
// }


// Emitter.prototype.emit = function(type) {
//   if (this.events[type]) {
//     this.events[type].forEach(event => {
//       event();
//     });
//   }
// }

module.exports = class Emmiter {
  constructor() {
    this.events = {};
  }

  on(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
  }

  emit(type) {
    if (this.events[type]) {
      this.events[type].forEach(event => event());
    }
  }
}

// module.exports = Emitter;