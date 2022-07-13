// Given an integer array nums, return the length of the longest strictly increasing subsequence.

// A subsequence is a sequence that can be derived from an array by deleting some
//  or no elements without changing the order of the remaining elements.
//   For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7]


// Input: array
// Output: Length of longest subsequence


//  Overall solution:
//  - user binarySearch return position
// if postition === length -> push num
// else array[pos] = num;
function longestIncreasingSubsequence(nums) {
  function binarySearch(array, num) {
    let left = 0;
    let right = array.length;

    console.log({ left, right, array });

    while (left < right) { // 0 < 
      const mid = Math.floor((right - left) / 2 + left);
      if (array[mid] < num)  {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    return right;
  }

  const array = [];

  for (const num of nums) {
    const pos = binarySearch(array, num);
    // console.log('1', { pos, array })
    if (pos === array.length) {
      array.push(num);
    } else  {
      array[pos] = num;
    }
  }

  console.log({ array })
  return array.length;
}

const result = longestIncreasingSubsequence([10, 9, 2, 5, 3, 7, 101, 18]); // 4 - [2,3,7,101]
console.log({ result });


// console.log("2", longestIncreasingSubsequence([0,0,3,2,3])); // 4
// console.log("3", longestIncreasingSubsequence([7, 7, 7, 7, 7, 7, 7])); // 1


// Notes:
/*
  Solutions:
  1. Dynamic Programming: decision after a previously made decision - Time: O(n^2), Space: O(n)
  2. 


*/



// function longestIncreasingSubsequence(nums) {
//   function binarySearch(array, num) {
//     let left = 0;
//     let right = array.length;

//     while (left < right) {
//       const mid = Math.floor((right - left) / 2 + left);
//       if (array[mid] < num) {
//         left = mid + 1;
//       } else {
//         right = mid;
//       }
//     }

//     return right;
//   }

//   const array = [];

//   for (const num of nums) {
//     const pos = binarySearch(array, num);
//     // console.log({ pos, array })
//     if (pos === array.length) {
//       array.push(num);
//     } else {
//       array[pos] = num;
//     }
//   }

//   console.log({ array });
//   return array.length;
// }