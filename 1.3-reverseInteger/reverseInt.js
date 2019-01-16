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
  return Math.sign(n) * parseInt(n.toString().split('').reverse().join(''));
}


// let number = parseInt(n.toString().split('').reverse().join(''));
// if (n < 0) {
//   return number * -1;
// }

// return number;


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

module.exports = reverseInt;