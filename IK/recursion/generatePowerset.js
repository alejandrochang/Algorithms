
let res = [];

function powerSet(str, idx, curr) {
  let n = str.length;

  if (n === idx) return;

  res.push(curr);
  // console.log({ curr });

  for (let i = idx + 1; i < n; i++) {
    curr += str[i];
    powerSet(str, i, curr);

    curr = curr.substring(0, curr.length - 1);
  }
  
  return res;
}



const result = powerSet([1, 2, 3], -1, "");
console.log({ result });



// High Level:


// Input :  set = "abc"
// Output : "", "a", "b", "c", "ab", "ac", "bc", "abc"

// Input : set = "abcd"
// Output : "" "a" "ab" "abc" "abcd" "abd" "ac" "acd"
//          "ad" "b" "bc" "bcd" "bd" "c" "cd" "d" 