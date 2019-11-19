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

const median = (arr) => {
  let countMap = {};
  let count = 0;
  let mostRepeated = [];

  for (let int of arr) {
    countMap[int] = countMap[int] || 1;
  }

  for (let int in countMap) {
    if (countMap[int] > count) {
      count = countMap[int]
      mostRepeated = [int];
    } else if (count === countMap[int]) {
      mostRepeated.push(int);
    }
  }

  if (mostRepeated.length === Object.keys(arr).length) return [];

  return mostRepeated
}



let arr1 = [1, 2, 3, 4, 4, 5, 5];
let arr2 = [1, 1, 2, 2, 3, 3, 4, 4];

console.log(mean(arr1)); // 3.43
console.log(mean(arr2)); // 2.5
console.log(mode(arr1)); // 4
console.log(mode(arr2)); // 2.5
console.log(median(arr1)); // [4, 5]
console.log(median(arr2)); // []