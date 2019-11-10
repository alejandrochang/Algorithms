// Persistence 

// 1.) persistence(39) === 3
// 3 * 9 = 27, 2 * 7 = 14, 1 * 4 = 4. We had to multiply 3 times in order to reach a single number. Therefore, the answer is 3.
// 2.) persistence(999) === 4
// 9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12, 1 * 2 = 2. Four calculations to reach a single number.

const persistence = (num) => {
  
}

console.log(persistence(39)); // === 3
console.log(persistence(999)); // === 4

// I: int
// O: int (# of times to get to single digit)
// T: 
// S: 

// [pseudo]
// turn numbers to string, split into array
// iterate through the array see if it arrays length is less than one