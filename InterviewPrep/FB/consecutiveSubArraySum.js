// Given an array consisting of n integers, find the
// contiguous subarray of given length k that has the maximum average value.
// Consercutive subarraySum

// Kadane's approach Algorithmn
const maxSequence = (arr) => {
  let currentMax = 0; // 5
  let max = 0; // 5

  for (let i = 0; i < arr.length; i++) {
    currentMax = Math.max(0, arr[i] + currentMax);
    max = Math.max(currentMax, max);
  }

  return max;
}

// I: arr
// O: integer
// Time: O(n)
// Space: O(n)

// const arr =[-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSequence(arr)); // 6
// Loop through array
// Compare sequence with 0, see which ones bigger, if > 0, continue adding
// if < 0, reset to 0 for next subSequence


// 2) Brute Force O(n^2)
const consecutiveSubArraySum = (arr) => {
  let currentMax = Number.NEGATIVE_INFINITY;
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let length  = arr.length;

  for (let i = 0; i < length; i++) {
    let maxSum = 0;
    for (let j = i; j < length; j++) {
      maxSum += arr[j];

      if (currentMax < maxSum) {
        leftIdx = i;
        currentMax = maxSum;
        rightIdx = j;
      }
      let currentNum = arr[j];
    }

  }

  return currentMax;
}

// curentMax = 1
// leftIdx: 1
// rightIdx: 1
// i: 2
// j: 2 arr[j] = 1
// maxSum = -2

const arr =[-2, 1, -3, 4, -1, 2, 1, -5, 4];
// 4, -1, 2, 1 === 6