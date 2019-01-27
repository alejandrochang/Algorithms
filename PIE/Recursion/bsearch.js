
// Implement binary search recursively

// bsearch is log(n) because half of the search space is elminitaed through each iteration.
// This is more efficient that a single search through all the elements 

function bsearch(arr, target) {
  if (arr.length === 0) {
    return null;
  }

  const mid = Math.floor(arr.length / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return bsearch(arr.slice(0, mid), target) 
  } else if (arr[mid] < target) {
    let result = bsearch(arr.slice(mid + 1), target);
    return result === null ? null : result + mid + 1;
  }
}


console.log(bsearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 7)); // 6
console.log(bsearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // 4
console.log(bsearch([1, 2, 3, 4, 5, 6, 7, 8, 9], 1)); // 0