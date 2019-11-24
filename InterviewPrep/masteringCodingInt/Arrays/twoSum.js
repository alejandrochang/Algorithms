// Find the indices of the numbers that add up to the target


// efficient solution:
const twoSum = (nums, target) => {
  let map = {};
  let result = [];
  
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      let temp = target - nums[i];
      let j = nums.indexOf(temp);
      result.push([j, i]);
    }

    let difference = target - nums[i];
    map[difference] = true;
  }
  
  return result[0];
}

console.log(twoSum([ 2, 7, 11, 15 ], 9)); // [0,1]

// brute force
// const twoSum = (nums, target) => {
//   let result = [];
  
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target && i !== j) {
//         result.push([i, j]);
//       }
//     }
//   }
  
//   return result[0];
// };
