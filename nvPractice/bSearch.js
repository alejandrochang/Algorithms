

const arr = [1, 2, 12, 30,47,96, 524];

function bSearch(arr, target, start, end) {
  if (start > end) return false;

  let mid = Math.floor((start + end) / 2);
  if (arr[mid] === target) return true;

  if (arr[mid] > target) {
    // > target is on left side
    return bSearch(arr, target, start, mid-1);
  } else {
    // < target is on right side
    return bSearch(arr, target, mid + 1, end);
  }
}

const res = bSearch(arr, 2, 0, arr.length - 1);
console.log({ res });


// High Level: solve in O(logn) time complexity