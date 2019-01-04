// Equalize the Array
// Karl has an array of integers.He wants to reduce the array until all remaining elements are
// equal.Determine the minimum number of elements to delete to reach his goal.
// For example, if his array is arr = [1, 2, 2, 3], we see that he can delete the elements 1 and
// 3 leaving arr = [2, 2].He could also delete both twos and either the 1 or the 3, but that
// would take 3 deletions.The minimum number of deletions is 2.

// Problem Description
// Write a function that takes a single input parameter - an array of integers - and returns an
// integer denoting the minimum number of deletions required such that all remaining elements are
// equal.

// Constraints
// 1 <= arr[i] <= 100

// Test Cases

function equalize(arr) {
  let counts = {};
  
  for (let i = 0; i < arr.length; i++) {
    let count = counts[arr[i]] || 0;
    counts[arr[i]] = count + 1;
  }

  let maxCount = 0;
  
  for (let num in counts) {
    if (counts.hasOwnProperty(num) && counts[num] > maxCount) {
      maxCount = counts[num];
    }
  }
  
  return arr.length - maxCount;
  
}

// console.log(equalize([1, 2, 2, 3])); // 2
// console.log(equalize([7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7])); // 0
// console.log(equalize([7, 2, 4, 5, 2, 3, 3, 4, 1, 7, 3])); // 8

class RomanNumerals {
  toRoman(number) { // => string
    let result = '';
    let regNums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    for (let i = 0; i <= regNums.length; i++) { // going through numbers in arr

      while (number % regNums[i] < number) { // decrease until regNums doesn't fit    
        result += roman[i]; 
        number -= regNums[i]; // remove the value of the #
      }
    }

    return result;
  } 

  fromRoman(string) {  // => number
    let result = 0;
    let regNums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

    for (let i = 0; i <= regNums.length; i++) {

      while (string.indexOf(roman[i]) === 0) {
        result += regNums[i]; 
        string = string.replace(roman[i], ''); // regex expression to remove the matched roman char from the beginning with empty str
      }
    }

    return result;
  }
}

let r = new RomanNumerals;
// console.log(r.toRoman(1990)); //"MCMXC"
// console.log(r.toRoman(2008)); // "MMVIII"
// console.log(r.fromRoman("MDCLXVI")); // 1666


// moveFormat: “Column_Color”
// piecesPositionList: moveFormat[]

// piecesPositionList = [
//   "A_Red",
//   "B_Yellow",
//   "C_Red",
//   "D_Yellow",
//   "E_Red",
//   "F_Red",
//   "G_Red"
// ]

let case1 = ["A_Yellow",
  "B_Red",
  "B_Yellow",
  "C_Red",
  "G_Yellow",
  "C_Red",
  "C_Yellow",
  "D_Red",
  "G_Yellow",
  "D_Red",
  "G_Yellow",
  "D_Red",
  "F_Yellow",
  "E_Red",
  "D_Yellow"
]; //red

let case2 = ["A_Red",
  "B_Yellow",
  "A_Red",
  "E_Yellow",
  "F_Red",
  "G_Yellow",
  "A_Red",
  "G_Yellow"
] // draw

function connect4(piecesPositionList) {
  const values = [[0, -1], [-1, 1], [0, 1], [1, 1], [1, 0], [-1, -1], [-1, 0], [1, -1]];
  const x = [1, 2, 3, 4, 5, 6];
  const y = [A, B, C, D, E, F, G];

  for (let i = x; i < x.length; i++) {
    for (let j = y; j < y.length; j++) {
      // iterate though values and connect to see if the colors match in a four sequence based on the x and y axis
    }
  }
}


console.log(connect4(case1)); // red
console.log(connect4(case2)); // draw

// returns yellow, red or draw