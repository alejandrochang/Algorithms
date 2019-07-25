// i: arr, target
// o: [ array of indices ]
// Constraints: 

// Iterate through the array
// Calculate the target value - [i] , store in a hashMap
// check if arr[i] that your iterating is true(hold the idx), if it is return  the value of the // hashmap and the idx iterating


function twoSum(nums, target) {
    let indexMap = {}
    let storedIndex = 0;
    for (let i = 0; i < nums.length; i++) {
      let diff = target - nums[i];
      if (indexMap[nums[i]]) { // the current number being iterated
        return [storedIndex, i];
      }

      indexMap[diff] = true;
      storedIndex = i;
    }

  return false;
};

console.log(twoSum([2, 7, 11, 15], 9));


//Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].