

function bSearch(arr, target) {
  if (arr.length === 0) {
    return null;
  }

  const mid = Math.floor(arr.length / 2);
  if (arr[mid] === target) {
    return mid;
  } else if (arr[mid] > target) {
    return bSearch(arr.slice(0, mid), target);
  } else if (arr[mid] < target) {
    let result = bSearch(arr.slice(mid + 1), target);
    return result === null ? null : result + mid + 1;
  }
}

console.log(bSearch([1, 2, 3, 4, 5, 6, 7], 4)); // 3
console.log(bSearch([1, 2, 3, 4, 5, 6, 7], 10)); // null

