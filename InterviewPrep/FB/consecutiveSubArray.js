// Given an array of positive integers and a target integer ,
// find if there is a consecutive subarray that sums to the target.
// E.g, given {5,6,4,12}, findsum(10)=true, findsum(11)=false.

const findSum = (arr, target) => {
  let i = 0;
  let next = i + 1;
  let j = arr.length - 1; // 3

  while (i < j) {
    
  }
}

const arr = [5,6,4,12];
console.log(findSum(arr, 10)); // true
console.log(findSum(arr, 11)); // true
console.log(findSum(arr, 27)); // false

// I: arr, target
// O: bool

// [pseudo]

// iterate through array, check to see if current element + next element + next element
// is equal to target, if its not, then continue adding until last idx, after last 
// idx, increase i + 1, do all over again