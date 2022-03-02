

// Generate all subsets of the problem


function generateAllSubs(str) {
  let res = [];

  function helper(s, idx, curr) {
    if (s.length === idx) return;

    res.push(curr);
    for (let i = idx + 1; i < s.length; i++) {
      curr += str[i];

      helper(s, i, curr);
      curr = curr.substring(0, curr.length - 1);
    }
  }

  helper(str, -1, '');

  return res;
}


const s = 'xy';
const res = generateAllSubs(s);

console.log({ res });