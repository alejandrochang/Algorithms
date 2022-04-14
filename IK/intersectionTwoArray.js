// // Intersection Two Arrays
// // Given two arrays, write a function to compute their intersection


// Input:
const nums1 = [1,2,2,1];
const nums2 = [2,2];

// function interTwoArrays(arr1, arr2) {
//   // unique 
//   let set1 = new Set(arr1);

//   const filtered = arr2.filter((el) => set1.has(el));
//   const res = [...new Set(filtered)];
//   return res;
// }

function interTwoArrays(arr1, arr2) {
  let set1 = new Set(arr1);
  let set2 = new Set(arr2);
  let res = [];
  set1.forEach((el) => {
    if (set2.has(el)) res.push(el);
  })

  return res;
}


console.log(interTwoArrays(nums1, nums2)); // Output: [2]
console.log(interTwoArrays([4, 9, 5], [9, 4, 9, 8, 4])); // Output: [9,4]


// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.



// function intersectionTwoArrays(num1, num2) {
//   let set1 = new Set(num1);
//   let set2 = new Set(num2);
//   let res = [];

//   set1.forEach((item) => {
//     if (set2.has(item)) {
//       res.push(item);
//     }
//   });


//   return res;
// }


// function iTwoArrays(num1, num2) {
//   let set1 = new Set(num1);

//   return [...new Set(num2.filter((el) => set1.has(el)))];
// }


// // Time: O(n), space: O(n)

// let test = [1,2,2,1];
// let test2 = [2,2];

// let test3 = [4,9,5];
// let test4 = [9,4,9,8,4];

// // let r1 = intersectionTwoArrays(test, test2); // [2]
// // let r2 = intersectionTwoArrays(test3, test4); // [9,4]
// let r1 = iTwoArrays(test, test2); // [2]
// let r2 = iTwoArrays(test3, test4); // [9,4]

// console.log({ r1, r2 });


/*
  Sorted: [1,1,2,2] - [2,2] - Onlogn 
  Non-Sorted: O(n) time, O(n) space


  Set - O(n) Space - O(n) time 
*/