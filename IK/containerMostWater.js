// You are given an integer array height of length n. 
// There are n vertical lines drawn such that the two endpoints of the ith line are 
// (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container,
// such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

function containerMostWater(arr) {
  let ans = 0;
  let i = 0;
  let j = arr.length - 1;

  while (i < j) {
    let temp = Math.min(arr[i], arr[j]) * (j - i);
    console.log({ temp, i, j, ans })
    ans = Math.max(ans, temp);
    arr[i] <= arr[j] ? i++ : j--;
  }

  return ans;
}

const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
console.log('result', containerMostWater(arr)); // [1,8,6,2,5,4,8,3,7] // 49

// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7].
// In this case, the max area of water (blue section) the container can contain is 49.



// Trick:
// Remember width of container
// use width * Min of possible nums