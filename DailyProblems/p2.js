// Given an array of integers, return a new array such that each element at index i of the new 
// array is the product of all the numbers in the original array except the one at i.
// For example, if our input was[1, 2, 3, 4, 5], the expected output would be
// [120, 60, 40, 30, 24].If our input was[3, 2, 1], the expected output would be[2, 3, 6].

//   Follow - up: what if you can't use division?


let i1 = [1, 2, 3, 4, 5]; // [120, 60, 40, 30, 24]
let i2 = [3, 2, 1]; // [2, 3, 6]

function productOfAll(arr) {
  let result = [];
  let reducer = (acc, cv) => acc * cv ;
  let product = arr.reduce(reducer);
  for (let num of arr) {
    result.push(product / num);
  }

  return result;
}


console.log(productOfAll(i1)); // [120, 60, 40, 30, 24]
console.log(productOfAll(i2)); // [2, 3, 6]

// let result = [];
// const reducer = (acc, cv) => acc * cv;
// let product = arr.reduce(reducer);
// for (let num of arr) {
//   result.push(product / num);
// }

// return result;