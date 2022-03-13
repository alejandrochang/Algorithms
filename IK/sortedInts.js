// Given a sorted list of integers of length N
// determine if element x is in the list - without math or bitshift operations
// do it in O(logn) time

const list = [1,2,3,4,5,6,7];

// O(logn) time
// O(n) Space
function sortedList(arr, tgt) {
  let result = false;
  function bSearch(arr, left, right) {
    if (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === tgt) {
        result = true;
        return;
      } else if (arr[mid] > tgt) {
        //left side
        return bSearch(arr, left, mid - 1);
      } else {
        // right side
        return bSearch(arr, mid + 1, right);
      }
    }
  }

  bSearch(arr, 0, arr.length - 1);

  return result;
}

let res = sortedList(list, 4);
let res2 = sortedList(list, 6);
let res3 = sortedList(list, 1);
let res4 = sortedList(list, 100);
console.log({ res, res2, res3, res4 });


// Because it is sorted - we can use a binary search approach
// split into two halves and look at target from ther4
// Use left window + right window
// dividing the search interval in hald -> results in O(logn)