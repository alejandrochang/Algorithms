

function rollTheString(s, roll) {
  let i = 0;
  while (i < roll.length) {
    let editSize = roll[i];
    let string = s.slice(0, editSize); // 'abz'
    let restOfString = s.slice(editSize); // 'abz'
    let changedString = rollStringOne(string);
    s = changedString + restOfString;
    i++;
  }

  return s;
}

function rollStringOne(str) {
  let result = '';
  for (let char of str.split('')) {
    let charCode = char.charCodeAt(0);
    charCode -= 97;
    charCode += 1; // increment idx
    charCode %= 26; // taking account for z
    charCode += 97;
    result += String.fromCharCode(charCode);
  }

  return result;
}

console.log(rollTheString('abz', [3])); // bca
console.log(rollTheString('vwxyz', [1, 2, 3, 4, 5])); // aaaaa

// console.log(rollTheString('abz', [3])); // bca


// 97 - 122 ASCII code 