
const Greetr = require("./41-greeder");
var greeter1 = new Greetr();

greeter1.on("greet", () => {
  console.log("Inside the event helper");
});

greeter1.greet("Tony");


// var EventEmitter = require("events");

// class Greetr extends EventEmitter {
//   constructor() {
//     super(); // calling parent of the constructor, inherits
//     this.greeting = "Hello World";
//   }

//   greet(data) {
//     console.log(`${this.greeting}: ${data}`);
//     this.emit("greet", data);
//   }
// }

// var greeter1 = new Greetr();

// greeter1.on("greet", () => {
//   console.log("Inside the event helper");
// });

// greeter1.greet("Tony");
