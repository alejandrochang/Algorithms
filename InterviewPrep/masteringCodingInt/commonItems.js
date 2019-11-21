// Given 2  array, create a function that lets a 
// user know (true/false) whether these two arrays
// contain common items

// For example:

const commonItems = (arr1, arr2) => {
  let countMap = {};

  for (let i = 0; i < arr1.length; i++) {
    countMap[arr1[i]] = countMap[arr1[i]] + 1 || 1;
  }

  for (let j = 0; j < arr2.length; j++) {
    countMap[arr2[j]] = countMap[arr2[j]] + 1 || 1;
  }

  for (let z in countMap) {
    if (countMap[z] > 1) return true;
  }

  return false;
}

// Time: O(n + m) -> iterations grow as arrays length grow - truncked O(n)
// Space: O(n) -> map grows as arrays length grow

const arr1 = ['a', 'b', 'c', 'x'];
const arr2 = ['z', 'y', 'i'];
console.log(commonItems(arr1, arr2));
// false

const arr3 = ['a', 'b', 'c', 'x'];
const arr4 = ['z', 'y', 'x'];
console.log(commonItems(arr3, arr4));
// true

// pseudo
// O(n*m) qudratic, going through nested arrays

// better:
// add all elements to a countmap, see if its > 2, it is return true
// otherwise return false;