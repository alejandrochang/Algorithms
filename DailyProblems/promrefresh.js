// Promises Refresh
// asyn/await
// setTimeout Delay
// new promise((res, rej)) syntax

async function test(num) {
  if (num > 1) return num + 1;
  throw num - 1;
}

console.log(test(4)); // Promise { 5 }
// console.log(test(-1)); // rejected with reason -2 - ERR_UNHANDLED_REJECTION

// then/catch
test(4).then((v) => {
    console.log({ v }); // v: 5
  }).catch(e => console.log({ e }));

// test(1).then((v) => {
//     // console.log({ v })
//   }).catch(e => console.log({ e })); // v: 0


// async/await
async function asyncCall() {
  const result = await test(5); // 6
  // const result2 = await test(1); // error
  // console.log({ result });
}

// asyncCall();


// new Promise
const handleNewPromise = (num) => {
  return new Promise((resolve, reject) => {
    if (num > 1) resolve(num + 1);
    reject(num - 1)
  })
}
console.log('plop', handleNewPromise(5));

const delay = t => new Promise((res, rej) => setTimeout(res, t));

function delayTwo(t, num) {
  return new Promise((res, rej) => {
    if (num > 1) setTimeout(res(num + 1), t);
    rej(num - 1);
  })
}
// delay(5000).then(() => console.log('hello'));
// delayTwo(5000, -1).then(() => console.log('hello 2'));

// const promiseA = new Promise((resolve, reject) => {
//   try {
//     resolve(777);
//   } catch (e) {
//     reject(e);
//   }
// });

// promiseA.then((val) => console.log("asynchronous logging has val:", val));


// then.().catch()
// try {resolve} catch{}