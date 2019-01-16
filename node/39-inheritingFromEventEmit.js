var util = require('util');

function Person() {
  this.firstName = 'John ';
  this.lastName = 'Doe';
}

Person.prototype.greet = function() {
  console.log('Hello ' + this.firstName + this.lastName);
}

function PoliceMan() {
  // why doesn't bind() work here
  Person.call(this);
  this.badgeNumber = '12435';
}

util.inherits(PoliceMan, Person); // policeman inherits form person

let officer = new PoliceMan();
officer.greet(); // Hello John Doe