// Find pair with given sum in an array
// Given an unsorted array fo integers
// find a pari with a given su in it


function pariWithSumArr(arr, sum) {
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let diff = sum - arr[i];

    if (map[diff]) {
      return `Pair found art index ${map[diff].idx} ${i}`;
    }

    map[arr[i]] = { idx: i, diff };
  }

  return false;
}

console.log(pariWithSumArr([8,7,2,5,3,1], 10)); // indec 0, 2
// console.log(pariWithSumArr([8,7,2,5,3,1], 10));


// Solution
// Use a hashMap[key]: value for the difference of sum - currEl
// Checking to see if it adds up to any of the elements if its does
// we return that index and the sum.


// Time: O(n)
// Space: O(n)