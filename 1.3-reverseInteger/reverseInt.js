// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let number = parseInt(n.toString().split('').reverse().join(''));
  if (n < 0) {
    return number * -1;
  }

  return number;
}


console.log(reverseInt(15)) // === 51
console.log(reverseInt(981)) // === 189
console.log(reverseInt(500)) // === 5
console.log(reverseInt(-15)) // === -51
console.log(reverseInt(-90)) // === -9


//parseInt(), toString(), Math.sign

// function reverseInt(n) {
//   let sign = Math.sign(n);
//   let reverse = parseInt(
//     n
//       .toString()
//       .split("")
//       .reverse()
//       .join("")
//   );
//   return sign * reverse;
// }