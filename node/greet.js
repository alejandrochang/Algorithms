var greet = function() {
  console.log('Hello')
}

module.exports = greet;

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
Person.prototype.greet = function () {
  console.log('Hello ' + this.firstName + ' ' + this.lastName);
}

let Nancy = new Person('Nancy', 'Yang');
// Alex.greet(); // Hello Alejandro Chang
// Nancy.greet(); // Hello Nancy Yang


// IIFE
// A haching way to do encapsulation inside other functions, instead of using a module (alternative)

(function(lastName) {
  var firstName = 'Ale1 ';
  console.log(firstName + lastName)
}('Chang'))

var firstName = 'Ale';
console.log(firstName);

// Ale1 Chang, immediately invoked function always runs first, variables inside are protected by scope. 
// Ale