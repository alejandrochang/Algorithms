// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23



// Non-Efficient Approach

function maxSubarraySum(arr) {
  if (!arr.length) return 0;

  let max = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    let current = 0;
    for (let j = i; j < arr.length; j++) {
      current += arr[j]; // 
      max = Math.max(current, max);
    }
  }

  return max;
}





// Efficient Approach:  O(n) - Kadanes Algo
// function maxSubarraySum(arr) {
//   if (!arr.length) return 0;

//   let current = 0;
//   let max = Number.NEGATIVE_INFINITY;

//   for (let i = 0; i < arr.length; i++) {
//     current = Math.max(arr[i], arr[i] + current);
//     max = Math.max(max, current);
//   }

//   return max;
// }




// console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6   [4,-1,2,1]
console.log(maxSubarraySum([4, -1, 2, 1])); // 6
console.log(maxSubarraySum([1])); // 1
// console.log(maxSubarraySum([5, 4, -1, 7, 8])); // 23