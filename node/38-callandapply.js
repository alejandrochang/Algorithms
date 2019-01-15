var person = {
  name: 'John Doe',
  greet: function() {
    console.log(`Hello ${this.name}`);
  }
}

person.greet(); // Hello John Doe
person.greet.call({ name: 'Alejandro Chang'}); // Hello Alejandro Chang
// comma separated list of parameters

person.greet.apply({ name: 'Alejandro Chang'}); // Hello Alejandro Chang
// comma separated list of an array of arguments
// this object -> will become the 'this' keyword

