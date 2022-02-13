/*
  Two Sum:
  You have an array of n numbers and a number target. 

  Notes:
*/



function twoSum(arr, tgt) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) return true;
    let diff = arr[i] - tgt;

    map[diff] = true;
  }

  return false;
}

let result = twoSum([5, 9, 1, 3], 6); // true
let result2 = twoSum([5, 9, 1, 3], -6); // false
// console.log({ result, result2 });


//  6-5 = 1



// sort based approach?
// not sorted approach

// Clarify Questionn:
// Can input be modified?


// Two pointer teqchnique: Works with sorted input

function twoSumPointer(arr, tgt) {
  // let sorted = arr.sort((a, b) => a - b);

  let sum = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === tgt) {
      return true;
    } else if (sum < tgt) {
      left += 1;
    } else {
      //sum > target
      right -= 1;
    }
  }

  return false;
}

// If array is sorted
// Time: O(n)
// Space: O(1)

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

let resultPointer = twoSumPointer([2, 7, 11, 15], 9); // [1,2] -> true
// console.log({ resultPointer });



function twoPointer(arr, tgt) {
  let sum = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === tgt) {
      return true;
    } else if (sum < tgt) {
      left+=1;
    } else {
      right -= 1;
    }
  }

  return false;
}

// console.log('plop1', twoPointer([2, 7, 11, 15], 9)); // [1,2] -> true
// console.log('plop2,', twoPointer([12, 7, 2, 15], 9)); // [1,2] -> true
// console.log('plop3,', twoPointer([12, 7, 4, 15], 9)); // [1,2] -> false

function twoPointerIndices(arr, tgt) {
  // arr = arr.sort((a, b) => a - b);

  let sum = 0;
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    sum = arr[left] + arr[right];
    if (sum === tgt) {
      return [left, right];
    } else if (sum < tgt) {
      left++;
    } else {
      right--;
    }
  }

  return [];
}


console.log('plop1', twoPointerIndices([2, 7, 11, 15], 9)); // [1,2] -> true
console.log('plop2,', twoPointerIndices([2, 7, 12, 4], 11)); // [1,3] -> true
console.log('plop3,', twoPointerIndices([1, 2, 3, 100], -8)); // [] -> false



// Two pointer if sorted - O(n), space; O(1)
// Map technique if !sorted - O(n) Space: O(n)

// Time :O(nlogn)
// Space: O(1)