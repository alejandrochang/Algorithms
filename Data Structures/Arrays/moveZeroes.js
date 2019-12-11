

const moveZeroes = (arr) => {
  let idx = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      let temp = arr[i]; // 0
      arr[i] = arr[idx];
      arr[idx] = temp;
      idx++;
    }
  }

  return arr;
}


console.log(moveZeroes([1, 5, 0, 6, 0, 12]));
// [0, 0, 1, 5, 6, 12]


// pseudo
// iterate through function if zero and counter at idx, swap
// have counter to track index of movement