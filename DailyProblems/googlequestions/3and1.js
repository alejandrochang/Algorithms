
// Given an array of integers where every integer occurs 
// three times except for one integer, which only occurs once,
//  find and return the non-duplicated integer.

// For example, given [6, 1, 3, 3, 3, 6, 6], return 1. Given [13, 19, 13, 13], return 19.
// Do this in O(N) time and O(1) space.


// Do this in O(N) time and O(1) space.

function repeatedOnlyOnce(array) {
  
}

// function repeatedOnlyOnce(array) {
//   let charMap = {};

//   for (let num of array) {
//     charMap[num] = charMap[num] + 1 | 1;
//   }

//   for (let num in charMap) {
//     if (charMap[num] === 1) {
//       return num;
//     }
//   }

//   return null;
// }

console.log(repeatedOnlyOnce([6, 1, 3, 3, 3, 6, 6])); // 1
console.log(repeatedOnlyOnce([13, 19, 13, 13])); // 19