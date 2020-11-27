

function bSearch(arr, target) {
  if (arr.length === 0) {
    return null;
  }

  const mid = Math.floor(arr.length / 2);
  console.log({ arr, mid, target })
  // const midIndex = 
  if (arr[mid] === target) {
    console.log({ mid })
    return mid;
  } else if (arr[mid] > target) {
    console.log(arr, mid)
    return bSearch(arr.slice(0, mid), target);
  } else if (arr[mid] < target) {
    let result = bSearch(arr.slice(mid + 1), target);
    console.log({ result })
    return result === null ? null : result + mid + 1;
  }
}

console.log(bSearch([1, 3, 16, 22, 31, 33, 34], 31)); // 4
// console.log(bSearch([1, 2, 3, 4, 5, 6, 7], 4)); // 3
// console.log(bSearch([1, 2, 3, 4, 5, 6, 7], 10)); // null

