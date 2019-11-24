// MaxSubArray problem
// 

let allNegatives = (arr) => arr.every(num => num < 0);
let allPositives = (arr) => arr.every(num => num > 0);

const maxSubArraySum = (nums) => {
    // if (allNegatives(nums)) return 0;
    // if (allPositives(nums)) return nums.reduce((sum, curr) => sum += curr);
    let current = 0;
    let max = 0;
    
    for (let i = 0; i < nums.length; i++) {
      // console.log(nums[i])
        current = Math.max(nums[i], nums[i] + current);
        max =current;
    }
    
    return max;
};

const arr1 = [-2, -1];

console.log(maxSubArraySum(arr1)); // -1
// console.log(allNegatives(arr)); // false
// console.log(allNegatives(arr1)); // false