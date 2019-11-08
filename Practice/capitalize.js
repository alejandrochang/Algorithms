// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const capitalize = (str) => {
  let sentence = [];
  for (let word of str.split(' ')) {
    const firstLetter = word.slice(0, 1).toUpperCase();
    const newWord = firstLetter + word.slice(1);
    sentence.push(newWord);
  }

  return sentence.join(' ');
}

console.log(capitalize('a short sentence')) // --> '); //A Short Sentence'
console.log(capitalize('a lazy fox')); // --> 'A Lazy Fox'
console.log(capitalize('look, it is working!')) // --> 'Look); //, It Is Working!'

// I: string
// O: string -> capitalized
// Time: O(n)
// Space: O(n)

// [pseudo]
// iterate string split into array
// capitalize first word of sentence(mutate) 