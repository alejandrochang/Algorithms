// Move all zeroes to beginning of array

const moveZeroes = (arr) => {
  let lastIdx = 0;
  for (let i = 0; i < arr.length; i++) {
    // if its zero add to idx
    if (arr[i] === 0) {
      let temp = arr[lastIdx];
      arr[lastIdx] = arr[i];
      arr[i] = temp;
      lastIdx++;
    }
  }

  return arr;
}

let array = [5, 2, 0, 0, 5, 0, 8, 56, 102];
console.log(moveZeroes(array));


// pseudo
// when encountering a number that is zero swap with the last number that is not zero
// keep index of number that you're switching



// Move all zeroes to end of array