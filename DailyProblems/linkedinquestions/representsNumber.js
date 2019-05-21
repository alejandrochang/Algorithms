// This problem was asked by LinkedIn.

// Given a string, return whether it represents a number. Here are the different kinds of numbers:

// "10", a positive integer
// "-10", a negative integer
// "10.1", a positive real number
// "-10.1", a negative real number
// "1e5", a number in scientific notation
// And here are examples of non-numbers:

// "a"
// "x 1"
// "a -2"
// "-"

function representsANumber(str) {
  return !!parseInt(str);
}

// true
console.log(representsANumber('10'));
console.log(representsANumber('-10'));
console.log(representsANumber('10.1'));
console.log(representsANumber('-10'));
console.log(representsANumber('1e5'));

// false
console.log(representsANumber('a'));
console.log(representsANumber('x 1'));
console.log(representsANumber('a -2'));
console.log(representsANumber('-'));

// if they're all numbers or if there is a decimal point (only one);
// if theres a negative sign in front