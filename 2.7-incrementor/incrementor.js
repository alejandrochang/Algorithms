a = [1, 2, 3, 4, 5, 7, 8, 9]; // 6
b = [1, 3, 5, 9]; // 7


function incrementor(arr) {
  let step = null;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] - arr[i] === arr[i + 2] - arr[i + 1]) {
      step = arr[i + 1] - arr[i];
    }
  }

  for (let j = 0; j < arr.length; j++) {
    if (arr[j] + step !== arr[j + 1]) {
      return arr[j] + step;
    }
  }

  return null;
}


console.log(incrementor(a)); // 1
console.log(incrementor(b)); // 2