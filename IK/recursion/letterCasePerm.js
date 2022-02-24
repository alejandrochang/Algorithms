


// Givena string S
// Transform every letter to lowercase or uppercase to create another string
// Return a list of all possible outcomes


function letterCasePerm(string) {
  let result = [];
  helper(string, 0, '', result);

  return [... new Set(result)];
}

function helper(str, idx, currStr, collector) {
  if (idx === str.length) {
    return collector.push(currStr);
  } else {
    let ch = str.charAt(idx);
    if (typeof ch === 'number') {
      helper(str, idx + 1, currStr + ch, collector);
    } else {
      helper(str, idx + 1, currStr + ch.toLowerCase(), collector);

      helper(str, idx + 1, currStr + ch.toUpperCase(), collector);
    }
  }
}


const input = 't1D1'; // 't1d2', 't1D2', 'T1d2', T1D2'
console.log("result", letterCasePerm(input));



// if its a letter we have 2 choices: lowerCase and upperCase
// if number append number to string
// base case break on idx