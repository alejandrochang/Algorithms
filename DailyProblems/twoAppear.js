// Given an array of integers in which two elements appear exactly
// once and all other elements appear exactly twice, find the two elements that appear only once.

// For example, given the array [2, 4, 6, 8, 10, 2, 6, 10],
// return 4 and 8. The order does not matter.

// Follow-up: Can you do this in linear time and constant space?

const arr = [2, 4, 6, 8, 10, 2, 6, 10]; // 4, 8;


// linear time, linear space

function twoAppear(arr) {
  let countMap = {};
  for (let num of arr) countMap[num] = countMap[num] + 1 | 1;

  return Object.entries(countMap).filter(([key, val]) => val === 1); // [['4', 1], ['8', 1]]
}

let res = twoAppear(arr);
console.log({ res });

