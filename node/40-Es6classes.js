'use strict';

class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName; 
  }

  greet() {
    console.log('Hello, ' + this.firstName + this.lastName);
  }
}

let person1 = new Person('Alejandro ', 'Chang');
person1.greet();

let person1 = new Person('Alejandro ', 'Chang');
person1.greet();

// greet is automatically assignefd to the Person prototype through classes. 
// This sets up the prototype chain for you, this is a nice way syntactically to set up your prototypes. 
// Always keep in mind the concept of prototype when using ES6 classes