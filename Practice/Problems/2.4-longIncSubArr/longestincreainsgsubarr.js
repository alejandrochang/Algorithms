
function longestIncSubArr(arr) {
  if (!arr.length) return null;
  let length = 1;
  let max = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      length++;
    } else {
      if (max < length) {
        max = length;
      }
      length = 1;
    }
  }

  if (max < length) {
    max = length;
  }

  return max;
}

let arr1 = [1, 3, 2, 3, 4, 8, 7, 9];
let arr2 = [3, 3, 4, 8, 5, 9, 11, 15, 22]; // 5
let arr3 = [55, 70, 1, 2, 3, 4, 5, 6]; // 6

console.log(longestIncSubArr(arr1)); // 4 - [2, 3, 4, 8] -> contigous
console.log(longestIncSubArr(arr2)); // 5 - [2, 5, 9, 11, 15, 22]
console.log(longestIncSubArr(arr3)); // 6 - [1, 2, 3, 4, 5, 6];

// subarrays are contigous
// subsequence are not contigous

