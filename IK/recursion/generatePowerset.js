
let res = [];

function powerSet(str, idx, curr) {
  if (str.length === idx) return;

  res.push(curr);
  // console.log({ curr });

  for (let i = idx + 1; i < str.length; i++) {
    curr += str[i];
    powerSet(str, i, curr);

    curr = curr.substring(0, curr.length - 1);
  }
  
  return res;
}



const res1 = powerSet([1, 2, 3], -1, "");

console.log({ res1 });



// High Level:
// Recursively call - genenrate new Index + append string and substring as well 

// Input :  set = "abc"
// Output : "", "a", "b", "c", "ab", "ac", "bc", "abc"

// Input : set = "abcd"
// Output : "" "a" "ab" "abc" "abcd" "abd" "ac" "acd"
//          "ad" "b" "bc" "bcd" "bd" "c" "cd" "d" 