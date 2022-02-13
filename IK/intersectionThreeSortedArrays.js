/*
  Given three integer arrays, arr1, arr2, arr3
  sorted in strictly increasing order, return  a sorted array
  of only the integers that appeared in all 3 arrays

  Notes:
  Do the merge(left, right) part of the algorithm if common return arr
  Do the merge(leftover, rightMost)


  pointer problem -> move the index depending on the use case
  // if min of all problems continue with index
*/

function intersectionThreeSortedArrays(arr, arr2, arr3) {
  let i = 0;
  let j = 0;
  let k = 0;
  let result = [];
  // console.log({ arr, arr2, arr3 });

  while (i < arr.length && j < arr2.length && k < arr3.length) {
    if (arr[i] === arr2[j] && arr2[j] === arr3[k]) {
      result.push((arr[i], arr2[j]), arr3[k]);
      i++;
      j++;
      k++;
    } else {
      let min = Math.min(arr[i], arr2[j], arr3[k]);
      if (arr[i] === min) i++;
      if (arr2[j] === min) j++;
      if (arr3[k] === min) k++;
    }
  }

  return result;
}


// Time: O(n)
// Space: O(n)


let arr1 = [1,2,3,4,5];
let arr2 = [1,2,5,7,9];
let arr3 = [1,3,4,5,8];

let result = intersectionThreeSortedArrays(arr1, arr2, arr3);
console.log({ result });