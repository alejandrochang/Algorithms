// Merge two sorted arrays
// I: arr1, arr2
// O: arr -> sorted
// Time: O(n) -> iterating through sorted arrays
// Space: O(n) -> length of arrays length

const mergeSortedArrays = (arr1, arr2) => {
  let mergedArr = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      mergedArr.push(arr1.shift());
    } else {
      mergedArr.push(arr2.shift());
    }
  }

  return [...mergedArr, ...arr1, ...arr2];
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));
// [0, 3, 4, 4, 6, 30, 31];

// [pseudo]
// 