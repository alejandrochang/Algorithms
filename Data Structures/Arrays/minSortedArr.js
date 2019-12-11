// Find  the minimum in a rotated sorted array


const minSortedArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return arr[i + 1];
    }
  }

  return arr[0];
}

let arr = [4, 5, 6, 1, 2, 3];
let arr1 = [10, 20, 100, 2, 3, 4];
console.log(minSortedArr(arr)); // 1
console.log(minSortedArr(arr1)); // 1


// min: 1
// pseudo
// if currentNumber < nextNumber -> inflection point,
// return that number