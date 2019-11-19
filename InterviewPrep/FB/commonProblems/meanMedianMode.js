// Find the mean, median and mode

const mean = (arr) => {
  let total = arr.reduce((sum, int) => {
    return sum += int
  });

  return total / arr.length;
}

const mode = (arr) => {
  let mid = Math.floor(arr.length / 2);
  if (mid % 2 !== 0) {
    return arr[mid];
  } else {
    let sum = arr[mid] + arr[mid - 1];
    return sum / 2;
  }
}





let arr1 = [1, 2, 3, 4, 4, 5, 5];
let arr2 = [1, 1, 2, 2, 3, 3, 4, 4];

console.log(mean(arr1)); // 3.43
console.log(mean(arr2)); // 2.5
console.log(mode(arr1)); // 4
console.log(mode(arr2)); // 2.5
// console.log(median(arr1)); //
// console.log(median(arr2)); //