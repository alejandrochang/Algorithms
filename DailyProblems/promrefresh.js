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

test(4).then((v) => {
    console.log({ v })
  }).catch(e => console.log({ e })); // v: 5

test(1).then((v) => {
    console.log({ v })
  }).catch(e => console.log({ e })); // v: 0

async function asyncCall() {
  const result = await test(5); // 6
  // const result2 = await test(1); // error
  console.log({ result });
}

asyncCall();