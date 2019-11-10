// Persistence 
// Given a number see how many times it takes to reach a single number if you multiply ever single number out. 

// 1.) persistence(39) === 3
// 3 * 9 = 27, 2 * 7 = 14, 1 * 4 = 4. We had to multiply 3 times in order to reach a single number. Therefore, the answer is 3.
// 2.) persistence(999) === 4
// 9 * 9 * 9 = 729, 7 * 2 * 9 = 126, 1 * 2 * 6 = 12, 1 * 2 = 2. Four calculations to reach a single number.

const persistence = (num) => {
  // turn to array, keep count and total
  let numberArray = num.toString().split('');
  let count = 0;

  while (numberArray.length > 1) {
    let total = numberArray.reduce((sum, currentValue) => {
      return sum * currentValue;
    });

    numberArray = total.toString().split('');
    count++;
  }

  return count;
}

console.log(persistence(39)); // === 3
console.log(persistence(999)); // === 4

// I: int
// O: int (# of times to get to single digit)
// T: O(n ^ 2)
// S: O(n)

// [pseudo]
// turn numbers to string, split into array
// iterate through the array see if it arrays length is less than one
// reduce on the total result of the array, split again see if its longer than 1