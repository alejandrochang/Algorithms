// let greet = require('./greet');

// var person = {
//   firstName: 'Alejandro',
//   lastName: 'Chang',
//   greet: function() {
//     console.log('Hello, ' + this.firstName + ' ' + this.lastName);
//   }
// }

// person.greet();

// console.log(person['firstName']) // Alejandro 

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

let Alex = new Person('Alejandro', 'Chang');

Person.prototype.greet = function() {
  console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

Alex.greet();

let Nancy = new Person('Nancy', 'Yang');

Nancy.greet();