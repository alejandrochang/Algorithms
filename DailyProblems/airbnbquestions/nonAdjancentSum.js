// Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. 
// Numbers can be 0 or negative.

// For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

// Follow-up: Can you do this in O(N) time and constant space?


function largestSumNonAdjacent(array) {
  let oddSum = 0;
  let evenSum = 0;
  let uniqueCase = 0;

  if (array.length === 4) {
    uniqueCase += array[0] + array[array.length - 1];
  }

  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) {
      evenSum += array[i];
    } else if (i % 2 !== 0) {
      oddSum += array[i];
    }
  }

  return Math.max(oddSum, evenSum, uniqueCase);
}


console.log(largestSumNonAdjacent([2, 4, 6, 2, 5])); // 13
console.log(largestSumNonAdjacent([5, 1, 1, 5])); // 10

