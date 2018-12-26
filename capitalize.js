// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.

function capitalize(str) {
  let words = str.split(' ');
  
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }

  return words.join(' ');
}


console.log(capitalize('a short sentence')) // --> 'A Short Sentence'
console.log(capitalize('a lazy fox')) // --> 'A Lazy Fox'
console.log(capitalize('look, it is working!')) // --> 'Look, It Is Working!'

