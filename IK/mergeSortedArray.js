


// Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array
/* 

  The number of elements initialized in nums1 and nums2 are m and n respectively
  pointer into left, right, and array,
*/

function mergeSortedArray(nums1, m, nums2, n) {
  let left = m - 1;
  let right = n - 1;

  for (let i = nums1.length; i >= 0; i--) {
    if (right < 0) break;

    if (left >= 0 && nums1[left] > nums2[right]) {
      nums1[i] = nums1[left--];
    } else {
      nums1[i] = nums2[right--];
    }
  }

  return nums1;
}



console.log('result', mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5 ,6], 3)); // [1,2,2,3,5,6];



// [1, 2, 2, 3, 5, 6] --- [2,5]