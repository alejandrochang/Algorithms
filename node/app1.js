// let greet = require('./greet');

var person = {
  firstName: 'Alejandro',
  lastName: 'Chang',
  greet: function() {
    console.log('Hello, ' + this.firstName + ' ' + this.lastName);
  }
}

person.greet();

console.log(person['firstName']) // Alejandro 