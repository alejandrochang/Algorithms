// Given an array of numbers, find the length of the longest increasing subsequence in the array.
//  The subsequence does not necessarily have to be contiguous.

function longestIncreasingSub(array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    array[i] > array[i + 1] ? result.push(array[i]) : null;
  }

  return result.length;
}

console.log(longestIncreasingSub([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15])); // 6: it is 0, 2, 6, 9, 11, 15.


// as long as # is increasing we have a sequence
// if its smaller than the next, keep 