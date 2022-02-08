
// i + 1
function selectionSor(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    // index for swapping
    for (let j = i + 1; i < arr.length ; j++) {
      if (arr[j] < arr[i]) {
        minIndex = j
      }
    }

    [arr[i], arr[minIndex]] = [arr[mininndex], arr[i]];
  }

  return arr;
}

