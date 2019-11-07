// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const maxChar = (str) => {
  const countMap = {};
  let count = 0;
  let chosenChar = '';

  for (let ch of str) {
    countMap[ch] = countMap[ch] + 1 || 1;
  }

  console.log({ countMap });

  for (let ch in countMap) {
    if (countMap[ch] > count) {
      chosenChar = ch;
      count = countMap[ch]
    }
  }

  return chosenChar;
}

console.log(maxChar("abcccccccd")); // === "c"
console.log(maxChar("apple 1231111")); // === "1"

// I: string
// O: string
// Time: O(n)
// Space: O(n)

// [pseudo]
// put chars in count hash
// iterate through see 