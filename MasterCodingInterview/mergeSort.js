
function mergeSortArrays(left, right) {
  let result = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  return [...left, ...result, ...right];
}

const array = [0, 3, 4, 31, 51];
const array2 = [-5, 4, 14, 121, 709];

console.log(mergeSortArrays(array, array2)); // [-5, 0, 3, 4, 4, 14, 31, 51, 121, 709];


function mergeSort(arr) {
  if (arr.length === 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, middle));
  const right = mergeSort(arr.slice(middle));

  return mergeSortArrays(left, right);
}

const unorderedArr = [2, 5, 122, 11, -54, 28, 8383, 1];
console.log(mergeSort(unorderedArr)); // [sorted]