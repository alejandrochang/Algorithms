// This problem was asked by Microsoft.

// Given a dictionary of words and a string made up of those words(no spaces), return the original sentence in a list.
// If there is more than one possible reconstruction, return any of them. If there is no possible reconstruction, then return null.

// For example, given the set of words 'quick', 'brown', 'the', 'fox', 
// and the string "thequickbrownfox", you should return ['the', 'quick', 'brown', 'fox'].

// Given the set of words 'bed', 'bath', 'bedbath', 'and', 'beyond', and the string "bedbathandbeyond", 
// return either['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond'].

function filterWords(string, words) {
  let results = [];

  for (let word of words.values()) {
    if (string.includes(word)) {
      results.push(word);
    }
  }

  return results;
}

let words = new Set();
words.add('quick');
words.add('brown');
words.add('the');
words.add('fox');
let string = "thequickbrownfox";

let words2 = new Set();
words2.add("bed")
words2.add("bath")
words2.add("bedbath")
words2.add("and")
words2.add("beyond")

let string2 = "bedbathandbeyond";

console.log(filterWords(string, words)); // ['the', 'quick', 'brown', 'fox']
console.log(filterWords(string2, words2)); // ['bed', 'bath', 'and', 'beyond] or ['bedbath', 'and', 'beyond']


// console.log('words', words);
// for (const k of words.keys()) {
//   console.log(k) // quick, brown, the fox, 
// }


// for (const k of words.values()) {
//   console.log(k) // quick, brown, the fox, 
// }
// add, delete, size, clear, keys, values