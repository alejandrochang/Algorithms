// bubble sort 
// O(n) best case, O(n^2) avg/worst case

function bubbleSort(arr) {
  let not_sorted = true;

  while (not_sorted) {
    not_sorted = false;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        not_sorted = true;
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }

  return arr;
}

console.log(bubbleSort([12, 400, 105, 2, 27, 7, 45, 1, 10])); //  