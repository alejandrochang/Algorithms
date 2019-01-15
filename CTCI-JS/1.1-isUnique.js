

// O(n) Time Complexity (Most efficient way to do it);

function isUnique(string){
  return string === [... new Set(string)].join('');
}

// function isUnique(string){
//   let charMap = {};
//   for (let ch of string) {
//     charMap[ch] = charMap[ch] + 1 || 1;
//   }

//   for (let ch in charMap) {
//     if (charMap[ch] > 1) {
//       return false;
//     }
//   }

//   return true;
// }

let str1 = 'abcdef'; 
let str2 = 'abcdeffffff'; 
let str3 = 'algerts00'; 

console.log(isUnique(str1)); // true
console.log(isUnique(str2)); // false
console.log(isUnique(str3)); // false


// naive approach O(n^2)

function isUniqueSlow(string) {
  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] === string[j]) {
        console.log(string[j]);
        return false;
      }
    }
  }

  return true;
}

// Sets are good for checking memebership within a value