// Given an array and a number k that's smaller than the length of
// the array, rotate the array to the right k elements in-place.


// [1,2,3,4], k = 2 -> [3,4,1,2] - arr.length - k
// [1,2,3,4,5], k = 2 -> [3,4,5,1,2] --- arr.length (5) - k


function rotateBrute(arr, k) {
  return [...arr.slice(k), ...arr.slice(0, k)];
}

const result = rotateBrute([1,2,3,4], 2); // [3,4,1,2]
const result2 = rotateBrute([1,2,3,4,5], 2); // [3,4,5,1,2]
console.log({ result, result2 });