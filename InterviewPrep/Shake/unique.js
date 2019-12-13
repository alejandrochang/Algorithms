
/// get duplicates in an array in O(n) time and O(1) space complexity

const getDuplicates = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[arr[i] % 10] = arr[arr[i] % 10] + 10;
  }

  // for (let i = 0; i < )
  return arr;
}

let arr = [1, 6, 3, 1, 3, 6, 6];
console.log(getDuplicates(arr)); // 1, 3, 6