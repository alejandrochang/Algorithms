// Promises Refresh
// asyn/await
// setTimeout Delay
// new promise((res, rej)) syntax

async function test(num) {
  if (num > 1) return num + 1;
  throw num - 1;
}

// console.log(test(4)); // Promise { 5 }
// console.log(test(-1)); // rejected with reason -2

function printTest(fn) {
  fn.then((v) => {
    console.log({ v })
  }).catch(e => console.log({ e }));
}

console.log(printTest(test(4))); // v: 5
console.log(printTest(test(1))); // e: 0

