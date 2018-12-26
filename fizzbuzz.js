// Fizzbuzz 

// Write a program that prints the numbers 1 through 100, prints "Fizz" 
// for multiples of 3, "buzz" for multiples of 5 and "Fizzbuzz" for both multiples

function fizzbuzz(number) {
  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("Fizzbuzz")
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzbuzz(100)