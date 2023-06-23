// Call, APply Bind

const person = {
  fullName: function() {
    return this.firstName + this.lastName;
  }
}

const p1 = {
  firstName: 'Ale',
  lastName: 'Chang',
};

console.log('p', person.fullName(p1)); // NaN
console.log('p', person.fullName.call(p1)); // AleChang


// call() and apply() behave similarly

// Diff:
// call: method takes arguments separately
// apply: method takes arguments as an array

const personApply = {
  fullName: function(city, country) {
    return this.firstName + ' ' + this.lastName + ' ' + `lives in city: ${city} and country: ${country}`;
  }
}

console.log('se', personApply.fullName.apply(p1, ['RWC', 'US'])); 
//Ale Chang lives in city: RWC and country: US
