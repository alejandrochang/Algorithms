
// Given an array of integers in which two elements appear exactly once and all 
// other elements appear exactly twice, find the two elements that appear only once.
// For example, given the array [2, 4, 6, 8, 10, 2, 6, 10], return 4 and 8. The order does not matter.
// Follow-up: Can you do this in linear time and constant space?

// Answer: To use 


// TIme: O(n) - Space: O(n)

function twoElemenetAppearOnce(arr) {
  let map = {};
  let res = [];

  for (let i = 0; i < arr.length; i++) {
    map[arr[i]] = map[arr[i]] + 1 || 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] === 1) res.push(arr[i]);
  }

  return res;
}

let res = twoElemenetAppearOnce([2, 4, 6, 8, 10, 2, 6, 10]);
console.log({ res })