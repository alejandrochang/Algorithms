// Move all zeroes to beginning of array

const moveZeroes = (arr) => {
  let idx = 0;
  for (let i = 0; i < arr.length; i++) {
    // if its zero add to idx
    if (arr[i] === 0) {
      let temp = arr[idx];
      arr[idx] = arr[i];
      arr[i] = temp;
      idx++;
    }
  }

  return arr;
}

// let array = [5, 2, 0, 0, 5, 0, 8, 56, 102];
// console.log(moveZeroes(array)); // [ 0, 0, 0, 2, 5, 5, 8, 56, 102 ]



// pseudo
// when encountering a number that is zero swap with the last number that is not zero
// keep index of number that you're switching

// Move all zeroes to end of array

const moveZeroes2 = (arr) => {
  let idx = arr.length - 1; // 
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      let temp = arr[idx]; // 102
      arr[idx] = arr[i];
      arr[i] = temp;
      idx--;
    }
  }

  return arr;
}


let array2 = [5, 2, 0, 0, 5, 0, 8, 56, 102];
console.log(moveZeroes2(array2)); // 


// if the current number is zero
// swap it with the beginning number