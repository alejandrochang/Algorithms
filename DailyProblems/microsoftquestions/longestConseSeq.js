// Given an unsorted array of integers, find the length of the 
// longest consecutive elements sequence.


// For example given [100, 4, 299, 1, 3,  2] -> [1, 2, 3, 4]


function longestConsecutiveSequence(arr) {
  let hashMap = {};

  for (let num of arr) {
    hashMap[num] = [num]; // '100': [100]
  }

  for (let num in hashMap) {
    if (key[-1] - 1 === parseInt(num)) {
      hashMap[key].unshit(num);
    }
  }
}


longestConsecutiveSequence([100, 4, 200, 1, 3, 2]); // [1, 2, 3, 4]

// Time Constrain : O(n) complexity


// Input: array
// Output: array
// Constraints: O(n) Time


// we know that we have to iterate store these in some sort of data format to be able to see if there is every consective numbers. 
// iterate through all put them in a hashMap of itself inside an array
// iterate again see if any are less or greater than if they are add them appropriately