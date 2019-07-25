// i: arr, target
// o: [ array of indices ]
// Constraints: 

// Iterate through the array
// Calculate the target value - [i] , store in a hashMap
// check if arr[i] that your iterating is true(hold the idx), if it is return  the value of the // hashmap and the idx iterating


function twoSum(nums, target) {
  let hashMap = {};
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    
  }
};

console.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(twoSum([3, 2, 3], 6)); // [0, 2]


//Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// 0: { index: 0, difference: 3};
// for (let num in hashMap) { if (hashMap[num] === )}