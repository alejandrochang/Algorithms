
const caesarCipher = (string, shift) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    const input = string.toLowerCase();
    let output = '';

    for (let i = 0; i < input.length; i++) {
      let ch = input[i];
      if (alphabet.indexOf(ch) === -1) {
        // not included in alphabet
        output += ch;
        continue;
      }

      let idx = alphabet.indexOf(ch) + shift % 26;
      if (idx > 25) idx -= 26;
      if (idx < 0) idx += 26;
      output += string[i] === string[i].toUpperCase() ? alphabet[idx].toUpperCase() : alphabet[idx];
    }

    return output;
};

console.log(caesarCipher('hi', 2)); // 'jk
// console.log(caesarCipher("I love JavaScript!", 51)); // "J mpwf KbwbTdsjqu!");
console.log(caesarCipher("I love JavaScript!", 100)); // "E hkra FwrwOynelp!");
console.log(caesarCipher("I love JavaScript!", -100)); // "M pszi NezeWgvmtx!");
