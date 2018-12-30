// bsearch: O(log(n))
// already sorted (dictionary)
// return the index

function bsearch(arr, target) {
  if (arr.length === 0) {
    return false;
  } else {
    const mid = Math.floor(arr.length / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] > target) {
      return bsearch(arr.slice(0, mid), target);
    } else if (arr[mid] < target) {
      let result = bsearch(arr.slice(mid + 1), target);
      return result === null ? null : result + mid + 1;
    }
  }
}

console.log(bsearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8)); // 7
console.log(bsearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 2)); // 1
console.log(bsearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 6)); // 5
console.log(bsearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 400)); // null this is wrong