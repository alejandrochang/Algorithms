// The number 6174 is known as Kaprekar's contant, after the mathematician who discovered an associated property: 
// for all four-digit numbers with at least two distinct digits, repeatedly applying a simple procedure eventually results in this value.
// The procedure is as follows:

// For a given input x, create two new numbers that consist of the digits in x in ascending and descending order.
// Subtract the smaller number from the larger number.
// For example, this algorithm terminates in three steps when starting from 1234:

// 4321 - 1234 = 3087
// 8730 - 0378 = 8352
// 8532 - 2358 = 6174
// Write a function that returns how many steps this will take for a given input N.

const getAscending = (num) => {
  return num.split('').sort(function(a, b) { return a - b }).join('');
}

const getDescending = (num) => {
  return num.split('').sort(function(a, b) { return b - a }).join('');
}

const kaprekarsConstant = (num) => {
  let steps = 0;
  const ascending = getAscending(num);
  const descending = getDescending(num);

  const result = ascending - descending;
  if (result === 6174) {
    return steps;
  } else {
    steps += 1;
    kaprekarsConstant(result);
  }
}


const result = kaprekarsConstant(1234);
console.log({ result });

// I: number
// O: count of how many steps it takes to reach Kaprekars constant
// T: 
// S: 


// pseudo:
// get the input, create two new numbers in ascending and descending order
// sorter -> sorts in descending, ascending
// sorted numbers 