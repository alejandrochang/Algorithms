



const sortColors = (arr) => {
  let i = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === 0) {
      [arr[j], arr[i]] = [arr[i], arr[j]];
      i++;
    }
  }

  let z = i;
  for (let m = 0; m < arr.length; m++) {
    if (arr[m] === 1) {
      [arr[m], arr[z]] = [arr[z], arr[m]];
      z++;
    }
  }

  return arr;
}


let arr = [2, 0, 2, 1, 1, 0];

// [0,0,1,1,2,2]
console.log('result:', sortColors(arr));
