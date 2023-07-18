

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


console.log(mergeSort([11, 4, 2223, 52, 5, 22, 1, 3, 77])); // [ 1, 3, 4, 5, 11, 22, 52, 77, 2223 ]
