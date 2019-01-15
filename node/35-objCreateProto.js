var person = {
  firstName: '',
  lastName: '',
  greet: function() {
    console.log(this.firstName + ' ' + this.lastName)
  }
}

let john = Object.create(person); // john points to person as its prototype
john.firstName = 'John';
john.lastName = 'Doe';

john.greet()

let jane = Object.create(person);
jane.firstName = 'Jane';
jane.lastName = 'Doe';

jane.greet();