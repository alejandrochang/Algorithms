// mergesort 
// splits the arrays into two and then processes them through a helper function
// Time Complexity - O(n * log(n));

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  const mid = Math.floor(arr.length / 2);

  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  
  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
}

var c = [33, 103, 3, 726, 200, 984, 198, 764, 9];
console.log(mergeSort([12, 400, 105, 2, 27, 7, 45, 1, 10]));
// [ 1, 2, 7, 10, 12, 27, 45, 105, 400 ]
console.log(mergeSort(c));
// [ 3, 9, 33, 103, 198, 200, 726, 764, 984 ]