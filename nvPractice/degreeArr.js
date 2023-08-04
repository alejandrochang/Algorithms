// Given a non-empty array of non-negative integers nums, 
// the degree of this array is defined as the maximum frequency of any one of its elements.

// Your task is to find the smallest possible length of a (
//   contiguous) subarray of nums, that has the same degree as nums.

 

// Example 1:


// Input: nums = [1,2,2,3,1]
// Output: 2
// Explanation: 
// The input array has a degree of 2 because both elements 1 and 2 appear twice.
// Of the subarrays that have the same degree:
// [1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
// The shortest length is 2. So return 2.

function shortestSubDegree(arr) {
  const countMap = {};
  for (let i = 0; i < arr.length; i++) {
    const el = arr[i];
    if (countMap[el]) {
      countMap[el].endIndex = i;
      countMap[el].frequency = countMap[el].frequency += 1;
    } else {
      // if it doesn't exists
      countMap[el] = { startIdx: i, endIndex: i, frequency: 1 };
    }
  }

  let highestFrequency = -Infinity;
  let smallestDegree = Infinity;
  for (let key in countMap) {
    const { startIdx, endIndex, frequency } = countMap[key];
    const diff = (endIndex - startIdx) + 1;
    if (frequency > highestFrequency) {
      highestFrequency = frequency;
      smallestDegree = diff;
    } else if (frequency === highestFrequency) {
      if (diff < smallestDegree) {
        highestFrequency = frequency;
        smallestDegree = diff;
      }
    }
  }

  return smallestDegree;
}

const test = [1,2,2,3,1];
const test2 = [1,2,2,3,1,4,2];
// 1- repeated twice -> 5
// 2- repeated twice -> 2

const res = shortestSubDegree(test);
const res2 = shortestSubDegree(test2);
console.log({ res, res2 }); // 2, 6
// Degrees: 2: (2 next to each other) - (1 - 1-5)
// Easiest: go and create subarrays with most repetitive nums - store degree and subarray


// O(n) time - O(n) space
// 1. create a countMap of frequency w/ startIndex and endIndex - (update frequency and endIndex as we see the key again)
// 2. Return highest frequency