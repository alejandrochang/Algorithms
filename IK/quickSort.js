// quicksort, gets a pivot and splits in half every time.
// O(n * log(n));

function quickSort(arr) {
  if (arr.length <= 1) return arr;
}

var c = [33, 103, 3, 726, 200, 984, 198, 764, 9];
console.log(quickSort([12, 400, 105, 2, 27, 7, 45, 1, 10]));// [ 1, 2, 7, 10, 12, 27, 45, 105, 400 ]
console.log(quickSort(c));// [ 3, 9, 33, 103, 198, 200, 726, 764, 984 ]
