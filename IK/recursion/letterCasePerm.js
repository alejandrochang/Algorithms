


// Givena string S
// Transform every letter to lowercase or uppercase to create another string
// Return a list of all possible outcomes


function letterCasePerm(string) {
  let result = [];

  helper(string, 0, '', result);
  return [...new Set(result)];
}

function helper(str, idx, currentStr, output) {
  if (idx === str.length) {
    output.push(currentStr);
  } else {
    // explore choices
    const currChar = str.charAt(idx);
    console.log({ currChar });
    if (typeof currChar === 'number') {
      helper(str, idx + 1, currentStr + currChar, output);
    } else {
      // if its a letter -> first lowercase thens uppercase
      helper(str, idx + 1, currentStr + currChar.toLowerCase(), output);

      helper(str, idx + 1, currentStr + currChar.toUpperCase(), output);
    }
  }
}


const input = 't1D1'; // 't1d2', 't1D2', 'T1d2', T1D2'
console.log("result", letterCasePerm(input));



// if its a letter we have 2 choices: lowerCase and upperCase