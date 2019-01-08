

function rollTheString(s, roll) {
  let i = 0;
  let newStr = '';
  while (i < roll.length) {
    let string = s.slice(0, s[num - 1]); // 'abz'
    for (let j = 0; j < string.length; j++) {
      newStr += newIndex(string[j]);
    }
    i++;
  }

  return newStr;
}

function newIndex(char) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let index = alphabet.indexOf(char);
  let newIdx = (index + 1) % alphabet.length;
  return alphabet[newIdx];
}

// console.log(rollTheString('abz', [3])); // bca
console.log(rollTheString('vwxyz', [1, 2, 3, 4, 5])); // aaaaa

// console.log(rollTheString('abz', [3])); // bca