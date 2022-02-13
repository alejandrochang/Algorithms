



/* 

  Notes:
  - Gets the midpoint - splits array into 2 - uses binary search
  - Divide and conquer
  - Recursively call mergeSort -> pass (left, right) into merge check left < right
*/


function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let res = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      res.push(left.shift())
    } else {
      res.push(right.shift())
    }
  }

  return [...res, ...left, ...right];
}

console.log(mergeSort([12, 400, 105, 2, 27, 7, 45, 1, 10])); // [ 1, 2, 7, 10, 12, 27, 45, 105, 400 ]
var c = [33, 103, 3, 726, 200, 984, 198, 764, 9];
console.log(mergeSort(c)); // [3,9,33,103,198, 200, 726, 764,984]
