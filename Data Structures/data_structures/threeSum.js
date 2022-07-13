


const arr = [-2, 0, 0, 2, 2];
const target = 0;


function threeSum(nums, tgt) {
  if (!nums.length) return [];
  if (nums.length < 3) return [];
  let results = [];
  nums.sort();

  for (let i = 0; i < nums.length - 2; i++) {
    let j = i + 1;
    let k = nums.length - 1;

    if (nums[i] > tgt) break;
    // if ()

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum === tgt) {
        results.push([nums[i], nums[j], nums[k]]);

        while (nums[j] === nums[j + 1]) j++;
        while (nums[k] === nums[k - 1]) k--;

        j++;
        k--
      } else if (sum < tgt) {
        // if sum is to small increment count to get to target
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
// Incorrect: [[-2,0,2], [-2,0,2]

// I: arr
// O: [[]];

// if !nums return []
// if nums < 3 return nums;


// function threeSum(nums) {
// 	const results = []

// 	// obviously irrelevant if we don't have at least 3 numbers to play with!
// 	if (nums.length < 3) return results

// 	// having the numbers in ascending order will make this problem much easier.
// 	// also, knowing the overall problem  will take at least O(N^2) time, we can
// 	// afford the O(NlogN) sort operation
// 	nums = nums.sort((a, b) => a - b)

//     // if the question asks us for a custom target, we can control it here
// 	let target = 0

// 	for (let i = 0; i < nums.length - 2; i++) {
// 		// `i` represents the "left" most number in our sorted set.
// 		// once this number hits 0, there's no need to go further since
// 		// positive numbers cannot sum to a negative number
// 		if (nums[i] > target) break

// 		// we don't want repeats, so skip numbers we've already seen
// 		if (i > 0 && nums[i] === nums[i - 1]) continue;

// 		// `j` represents the "middle" element between `i` and `k`.
// 		let j = i + 1

// 		// `k` represents the "right" most element
// 		let k = nums.length - 1
		
// 		while (j < k) {
// 			let sum = nums[i] + nums[j] + nums[k]

// 			// if we find the target sum, increment `j` and decrement `k` for
// 			// other potential combos where `i` is the anchor
// 			if (sum === target) {
// 				// store the valid threesum
// 				results.push([nums[i], nums[j], nums[k]])

// 				while (nums[j] === nums[j + 1]) j++
// 				while (nums[k] === nums[k - 1]) k--
// 				j++
// 				k--

// 			// if the sum is too small, increment `j` to get closer to the target
// 			} else if (sum < target) {
// 				j++

// 			// if the sum is too large, decrement `k` to get closer to the target
// 			} else { // (sum > target)
// 				k--
// 			}
// 		}
// 	}

// 	return results
// };