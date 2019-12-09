

const bSearch = (arr, tgt) => {
  if (arr.length <= 1) return arr;
  
  let mid = Math.floor(arr.length / 2);
  if (arr[mid] === tgt) {
    return true;
  } else if (arr[mid] < tgt) {
    return bSearch(arr.slice(0, mid), tgt);
  } else {
    return bSearch(arr.slice(mid + 1), tgt);
  }
}


console.log(bSearch([1, 3, 5, 7, 8, 9], 5)); // true