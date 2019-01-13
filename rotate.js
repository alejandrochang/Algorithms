

function rotate(nums, k) {
  k = k >= nums.length ? k % nums.length : k;
  let idx = nums.length - k;
  nums.unshift(...nums.splice(idx, k));
  return nums;
}

let arr = [1, 2, 3, 4, 5, 6, 7]; // 3

console.log(rotate(arr, 3)); // [5,6,7,1,2,3,4]

// numer of rotations 