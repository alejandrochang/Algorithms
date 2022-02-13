// quicksort, gets a pivot and splits in half every time.
// O(n * log(n));

function quickSort(arr) {
  if (arr.length <= 1) return arr;

  // get the pivot at start
  let pivot = arr[0];


  // filter left <= el && right > el
  let left = quickSort(arr.slice(1).filter((el) => el <= pivot));
  let right = quickSort(arr.slice(1).filter((el) => el > pivot));

  return [...left, pivot, ...right];
}



// Ex. 1
console.log(quickSort([12, 400, 105, 2, 27, 7, 45, 1, 10]));
// [ 1, 2, 7, 10, 12, 27, 45, 105, 400 ]

// Ex 2.
var c = [33, 103, 3, 726, 200, 984, 198, 764, 9];
console.log(quickSort(c));
// [ 3, 9, 33, 103, 198, 200, 726, 764, 984 ]
