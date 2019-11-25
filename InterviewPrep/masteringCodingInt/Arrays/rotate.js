// rorate  the array with the number of steps
// if its longer  than the length of the array take the modulo

const rotateArray = (arr, k) => {
  k = k >= arr.length ? k % arr.length : k;
  // let idx = arr.length - k;
  arr.unshift(...arr.splice(arr.length - k, k));

  return arr;
}

// Time: O(n)
// Spacee: O(1)

// const rotateArray = (arr, k) => {
//   k = k >= arr.length ? k % arr.lenght : k;
//   let idx = arr.length - k;
//   arr.unshift(...arr.splice(idx, k));
//   return arr;
// }

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3)); // Output: [5,6,7,1,2,3,4]
console.log(rotateArray([-1, -100, 3, 99], 2)); // [3, 99, -1, -100]


// k = k >= nums.length ? k % nums.length : k; 
//     let index = nums.length - k;
//     nums.unshift(...nums.splice(index, k));
//     return nums;

// if k is greater or equal to than nums.length than the # of rotates is k % nums.length
// if k is less than nums.length than it k rotations


// length - k || k % length