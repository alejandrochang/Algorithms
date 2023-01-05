// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// brute force time: O(n^2), space: O(1)
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }

  return [];
}

const nums = [2,7,11,15];
const target = 9;
// Output: [0,1]


function twoSum2(nums, target) {
  const map = {};
  let chosenIdx = null;
  let chosenPosition = null;

  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      chosenIdx = i;
      chosenPosition = target - nums[i];
    }
    let diff = target - nums[i];
    map[diff] = true;
  }

  console.log({ map })

  return [nums.indexOf(chosenPosition), chosenIdx];
}

console.log('Result:', twoSum2(nums, target))