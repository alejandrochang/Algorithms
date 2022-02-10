

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i];

    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j--;
    }

    arr[j + 1] = current;
  }

  return arr;
}

const test = [100, 5, 2, 1, 23, 12, 1]; 
console.log('res', insertionSort(test)); 



// compare next w/ previous - start at index 1