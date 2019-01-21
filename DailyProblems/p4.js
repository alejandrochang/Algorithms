// This problem was asked by Stripe.
// Given an array of integers, find the first missing positive integer in O(n) linear time and constant space.In other words, 
// find the lowest positive integer that does not exist in the array.
// The array can contain duplicates and negative numbers as well.
// For example, the input[3, 4, -1, 1] should give /. The input[1, 2, 0] should give 3.
// You can modify the input array in -place.

function firstMissingPositiveInt(arr) {
  let k = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= 0) {
      [arr[i], arr[k]] = [arr[k], arr[i]];
      k++;
    } 
  }

  return arr;
}

console.log(firstMissingPositiveInt([3, 0, 4, 0, -1, 1])); // 2
// console.log(firstMissingPositiveInt([1, 2, 0])); // 3


// O(n)
// No new reassignment


// Solution 1 - O(n * log(n));

// function firstMissingPositiveInt(arr) {
//   let sortedArr = arr.sort();
//   for (let i = 0; i < sortedArr.length; i++) {
//     if (arr[i] > 0 && arr[i] + 1 !== arr[i + 1]) {
//       return arr[i] + 1;
//     }
//   }

//   return null;
// }