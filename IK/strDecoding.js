


function strDecoding(str) {
  
}


const test = "1[b]"; // Output : b
const test1 = "2[ab]"; // Output : abab
const test2 = "2[a2[b]]"; // Output : abbabb
const test3 = "3[b2[ca]]"; // Output : bcacabcacabcaca

console.log("0", strDecoding(test));
console.log("1", strDecoding(test1));
console.log("2", strDecoding(test2));
console.log("3", strDecoding(test3));