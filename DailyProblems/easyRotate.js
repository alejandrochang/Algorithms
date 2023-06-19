// Given an array and a number k that's smaller than the length of
// the array, rotate the array to the right k elements in-place.


// [1,2,3,4], k = 2 -> [3,4,1,2] - arr.length - k
// [1,2,3,4,5], k = 2 -> [3,4,5,1,2] --- arr.length (5) - k


// [3,2,1,4,5] - [1 -> 3 - 3 -> 1]
// [3,4,1,2,5]
// [3,4,5,2,1]
// [3,4,5,1,2]


function rotateBrute(arr, k) {
  return [...arr.slice(k), ...arr.slice(0, k)];
}

const result = rotateBrute([1,2,3,4], 2); // [3,4,1,2]
const result2 = rotateBrute([1,2,3,4,5], 2); // [3,4,5,1,2]
// console.log({ result, result2 });

// Time: O(2n)
// Space: O(n) - due to placement of new array

function rotateRight(arr, k) {
  for (let i = 0; i < arr.length; i++) {
    let temp = arr[i]; // 1
    let swapNode = arr[i + k]; // 3
    if (temp && swapNode) {
      [arr[i], arr[i + k]] = [arr[i + k], arr[i]];
    }
    console.log({ temp, swapNode });
  }

  return arr;
}

// works for evens
console.log("result", rotateRight([1,2,3,4,5,6], 3)); // [4,5,6,1,2,3];