


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

console.log("res", nationalFlag(test));
// ["R", "R", "G", "G", "G", "G", "B", "B"];
// Orer of r, g, b