


const arr = [-2, 0, 0, 2, 2];
const target = 0;


function threeSum(nums, tgt) {
  if (!nums.length) return [];
  if (nums.length < 3) return [];
  let results = [];
  nums.sort();

  for (let i = 0; i < nums.length; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === tgt) {
        results.push([nums[i], nums[j], nums[k]]);

        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        j++;
        k--
      } else if (sum < tgt) {
        j++;
      } else {
        // if greater > tgt
        k--;
      }
    }
  }

  return results;
}

console.log(threeSum(arr, target));

// Correct: [[-2,0,2]]
// Incorrect: [[-2,0,2], [-2,0,2]]

// I: arr
// O: [[]];

// if !nums return []
// if nums < 3 return nums;