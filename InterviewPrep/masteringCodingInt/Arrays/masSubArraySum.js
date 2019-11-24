// MaxSubArray problem
// 

let allNegatives = (arr) => arr.every(num => num < 0);
let allPositives = (arr) => arr.every(num => num > 0);

// assuming lowest number should be 0
var maxSubArray = function(nums) {
  if (nums.length == 1) return nums[0];
  if (allNegatives(nums)) return 0;
  if (allPositives(nums)) return nums.reduce((sum, curr) => sum += curr);

  let current = 0;
  let max = 0;
  
  for (let i = 0; i < nums.length; i++) {
      current = Math.max(current, nums[i] + current);
      max = Math.max(current, max);
  }
  
  return max;
};

// maxSubArray inclduing negative numbers -> lowest number has to come from array and not 0
const maxSubArraySum = (nums) => {
    let current = 0;
    let max = Number.NEGATIVE_INFINITY;
    
    for (let i = 0; i < nums.length; i++) {
        current = Math.max(nums[i], nums[i] + current);
        max = Math.max(current, max);
    }
    
    return max;
};

const arr1 = [-2, -1];

console.log(maxSubArraySum(arr1)); // -1
console.log(maxSubArraySum([-2,1,-3,4,-1,2,1,-5,4])); // 6
// console.log(allNegatives(arr)); // false
// console.log(allNegatives(arr1)); // false