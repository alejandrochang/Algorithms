const https = require("https");

const url = "https://swapi.co/api/starships/2/";
const url1 = "https://swapi.co/api/starships/3/";
const url2 = "https://swapi.co/api/starships/5/";

const PromiseRequest = (url) => {
  return new Promise ( (resolve, reject) => {
      https.get(url, resp => {
        let data = "";

        resp.on("data", chunk => {  // A chunk of data has been recieved.
          data += chunk;
        });

        // The whole response has been received. Print out the result.
        resp.on("end", () => {
          resolve(JSON.parse(data));
        });
      })
      .on("error", err => {
        reject("Error: " + err.message);
      });
    }
  )
};

// PromiseRequest(url).then((response) => console.log(response)).catch((err) => console.log(err));


// htttp and the underlying comes in packets, you have to collect the whole response 
// res === response
// if err reject promise we are requesting
// https doesn't use promises, it just gets your data
// can only use await in an async function

const requestMultiple = async () => { // returns a promise 
  console.log('beginning')
  console.log(await PromiseRequest(url));
  console.log('middle');
  
  // const result1 = await PromiseRequest(url1);
  // const result2 = await PromiseRequest(url2);
  // console.log('spacechip 1', result1, 'spacehip 2', result2);
  return 'whatever'
}

// requestMultiple().then(finishiedFn => console.log(finishiedFn)); // returns 'whatever'
// we can use a .then() because every async function will return a promise 
// its synchronous until you hit await 

console.log(requestMultiple()); // returns a promise

// whenever you have an async function it will always return a promise

console.log('after async');