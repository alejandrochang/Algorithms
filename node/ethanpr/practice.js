const htttps = require('https');
const url = "https://swapi.co/api/starships/2/"; 
const url1 = "https://swapi.co/api/starships/3/";
const url2 = "https://swapi.co/api/starships/5/";

const PromiseRequest = () => {
  return new Promise ((resolve, reject) => {
    htttps.get(url, response => {
      let data = "";
      response.on("data", chunk => {
        data += chunk;
      })

      response.on("end", () => {
        resolve(JSON.parse(data));
      })      
    }).on("err", (err) => {
      reject("Error: " + err.message);
    })
  });
}

// PromiseRequest(url).then((res) => console.log(res)).catch((err) => console.log(err));

const MakeRequest = async () => {
  let result = await PromiseRequest(url);
  let result1 = await PromiseRequest(url1);
  let result2 = await PromiseRequest(url2);
  console.log(result, result1, result2);
}

MakeRequest();