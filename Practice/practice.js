

// // const arr = [1,2,3];
// // [1], [1,2], [1,2,3], 
// // [2], [2,3]
// // [3]
// // function getSubArrays(arr) {
// //   if (arr.length === 1) return [arr];
// //   else {
// //     subarr = getSubArrays(arr.slice(1));
// //     return subarr.concat(
// //       subarr.map((e) => e.concat(arr[0])), [[arr[0]]]
// //     );
// //   }
// // }


// // console.log(JSON.stringify(getSubArrays([1, 2, 3])));

// let arr = [5, 10, 11, 9, 5]

// // let set_length = arr.length;
// const k = 5;
// const checkSum = (arr) => {
//   const total = arr.reduce((acc, curr) => {
//     return acc += curr;
//   }, 0);

//   return total % k === 0;
// }

// let subsets = [];

// for (let i = 1; i <= arr.length; i++) {
//   for (let j = 0; j <= arr.length - i; j++) {
//     let currentSubset = arr.slice(j, j + i);
//     let key = JSON.stringify(currentSubset);
//     if (!subsets.includes(currentSubset) && checkSum(currentSubset)) {
//       subsets.push(currentSubset);
//     }
//   }
// }

// // subsets.map((sub) => {
// //   if ()
// // })
// // console.log({ subsets }, 'len', subsets.length);



// // const getAllSubsets = (arr) => arr.reduce((subsets, value) => subsets.concat(subsets.map((set) => [value, ...set])),[[]]);

// // console.log(getAllSubsets([1, 2, 3]));

// // console.log('res', kSub(5, arr));

// function getSubstring(str, k) {
//   let countMap = {};
//   let results = [];

//   let j = k;
//   for (let i = 0; i < str.length; i++) {
//     let sub = str.slice(i, j); //'010'

//     const checkValid = (substring, j) => {
//       let count = 0;

//       for (let ch of substring) {
//         if (ch === "1") count++;
//       }

//       if (count === k) { 
//         results.push(substring);
//       } else {
//         j++;
//         // i = i - 1;
//       }

//       console.log({ count, substring })
//       return count;
//     };


//     const count = checkValid(sub, j)
//     // return count;

//   }
// }


// console.log('res', getSubstring("0101101", 3)); // 