// import * as fetch from "node-fetch";

// fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json())
//   .then((json) => console.log(json));

// const https = require("https");
// let transactions = []

// const url = "https://jsonplaceholder.typicode.com/todos/1";
// https.get(url, (res) => {
//     let data = "";
//     res.on("data", (chunk) => data += chunk);
//     res.on("end", async () => {
//       data = JSON.parse(data);
//       console.log(data);
//       await transactions.push(data);
//     });
//   }).on("error", (err) => {
//     console.log(err.message);
//   });

//   console.log({ transactions })
