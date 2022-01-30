
// Also known as search in rotated sorted array


// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1
// Example 3:

// Input: nums = [1], target = 0
// Output: -1



// Time Complexiy: log(n) - binary search
// binary search of mid, left, right


// if left <= target <= right (must be on other side)
function searchRotatedSortedArr(arr, tgt) {
  if (!arr.length) return null;

  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === tgt) return mid;

    // check if left is sorted - if left < mid
    if (arr[left] <= arr[mid]) {
      if (arr[left] <= tgt && tgt <= arr[mid]) {
        // target is in the left
        right = mid - 1;
      } else {
        // its on the right
        left = mid + 1;
      }
    } else {
      // in the right window
      if (arr[mid] <= tgt && tgt <= arr[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1;
}



let res = searchRotatedSortedArr([4, 5, 6, 7, 0, 1, 2], 0); // 4
console.log({ res });

/* 

If you know one side is sorted, the rest of logic becomes very simple.
If one side is sorted, check if the target is in the boundary, otherwise it's on the other side.


*/