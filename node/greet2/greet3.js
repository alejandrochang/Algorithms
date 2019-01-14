function Greeter() {
  this.greeting = 'Hello World 3';
  this.greet = function() {
    console.log(this.greeting);
  }
}

module.exports = new Greeter;