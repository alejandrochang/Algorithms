
// worst case O(n ^ 2) quadratic
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[indexOfMin] > arr[j]) {
        indexOfMin = j;
      }
    }

    if (indexOfMin !== i) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

const c = [20, 7, 353, 44, 1, 13, 100, 2];
console.log(selectionSort(c));
// [ 1, 2, 7, 13, 20, 44, 100, 353 ]
