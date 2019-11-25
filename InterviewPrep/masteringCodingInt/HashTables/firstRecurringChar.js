// Given an array, give the first repeated character

const firstRepeatedChar = (arr) => {
  let countMap = {};

  for (let int of arr) {
    if (!countMap[int]) {
      countMap[int] = 1;
    } else {
      // countMap[int] + 1;
      return int;
    }
  }


  return undefined;
}

const arr = [2, 5, 1, 2, 3, 4, 1, 2, 4]; // 2
const arr1 = [2, 1, 1, 2, 3, 5, 1, 2, 4]; // 1
const arr2 = [2, 3, 4, 5]; // undefined

console.log(firstRepeatedChar(arr)); // 2
console.log(firstRepeatedChar(arr1)); // 1
console.log(firstRepeatedChar(arr2)); // undefined