// Given an array of numbers, find the length of the longest increasing subsequence in the array. 
// The subsequence does not necessarily have to be contiguous.

// For example, given the array 
// [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15], 
// the longest increasing subsequence has length 6: it is 0, 2, 6, 9, 11, 15.

function longestIncreasingSubsequence(arr) {
  let max = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentMax = Math.max(max, arr[i]);
    max = Math.max(currentMax + max, max);
  }
}

const arr = [0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15];
const result = longestIncreasingSubsequence(arr);
// 6

// return length; not the sum
console.log({ result });