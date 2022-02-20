


function nationalFlag(arr) {
  let red = 0;
  let green = 0;
  let blue = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'R') red++;
    if (arr[i] === 'G') green++;
    if (arr[i] === 'B') blue++;
  }

  for (let i = 0; i < red; i++) {
    arr[i] = 'R';
  }

  for (let i = red; i < (red + green); i++) {
    arr[i] = 'G';
  }

  for (let i = red + green; i < red + green + blue; i++) {
    arr[i] = "B";
  }

  return arr;
}


// const balls = ["G", "B", "G", "G", "R", "B", "R", "G"];
const test = ["G", "B", "G", "G", "R", "B", "R", "G"];

// console.log("res", nationalFlag(test));
// ["R", "R", "G", "G", "G", "G", "B", "B"];
// Orer of r, g, b


function swap(arr, fir, sec) {
  return ([arr[fir], arr[sec]] = [arr[sec], arr[fir]]);
}

// start low = 0, mid = 0, high  = length - 1
function dutchNationalFlag(arr) {
  let low = 0;
  let mid = 0;
  let high = arr.length - 1;

  while (mid <= high) {
    if (arr[mid] === 'R') {
      swap(arr, low++, mid++);
    } else if(arr[mid] === 'B') {
      swap(arr, mid, high--);
    } else {
      mid++;
    }
  }

  return arr;
}

console.log("res", dutchNationalFlag(test));
// ["R", "R", "G", "G", "G", "G", "B", "B"];
// Orer of r, g, b


// low, mid, high
// if it is need on left most side - we will swap the array elmeents from low++ and mid++
// else if mid === 'B' (right most side) - we will swap mid and high--
// else mid++