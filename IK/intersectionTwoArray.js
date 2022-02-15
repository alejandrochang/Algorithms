


// Intersection Two Arrays
// Given two arrays, write a function to compute their intersection



function intersectionTwoArrays(num1, num2) {
  let set1 = new Set(num1);
  let set2 = new Set(num2);
  let res = [];

  set1.forEach((item) => {
    if (set2.has(item)) {
      res.push(item);
    }
  });


  return res;
}


function iTwoArrays(num1, num2) {
  let set1 = new Set(num1);

  return [...new Set(num2.filter((el) => set1.has(el)))];
}


// Time: O(n), space: O(n)

let test = [1,2,2,1];
let test2 = [2,2];

let test3 = [4,9,5];
let test4 = [9,4,9,8,4];

// let r1 = intersectionTwoArrays(test, test2); // [2]
// let r2 = intersectionTwoArrays(test3, test4); // [9,4]
let r1 = iTwoArrays(test, test2); // [2]
let r2 = iTwoArrays(test3, test4); // [9,4]

console.log({ r1, r2 });


/*
  Sorted: [1,1,2,2] - [2,2] - Onlogn 
  Non-Sorted: O(n) time, O(n) space


  Set - O(n) Space - O(n) time 
*/