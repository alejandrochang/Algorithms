// Create a basic sentence checker that takes in a stream of characters and determines whether 
// they form valid sentences. If a sentence is valid, the program should print it out.

// We can consider a sentence valid if it conforms to the following rules:

// The sentence must start with a capital letter, followed by a lowercase letter or a space.
// All other characters must be lowercase letters, separators (,,;,:) or terminal marks (.,?,!,‽).
// There must be a single space between each word.
// The sentence must end with a terminal mark immediately following a word.

const checkUperCase = (s) => s.toUpperCase();
const checkPeriod = (s) => s === '.';

// const checkValidWord = (word) => word;

function sentenceChecker(str) {
  if (str[0] !== checkUperCase(str[0])) return false;
  if (str[str.length - 1] !== checkPeriod(str[str.length - 1])) return false;

  // const words = str.split(' ');
}

const sen = 'Check if this is valid sentence'; // true
const res = sentenceChecker(sen);

console.log({ res });


// 1. Check if str starts with capital word
// 2. Ensure all other chars are lower case or special chars (,,;,:) or terminal marks (.,?,!,‽)
// 3. Ensure space between words (check each word)
// 4. Ensure last ch ends with period