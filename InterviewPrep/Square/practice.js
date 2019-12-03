


// const codingScoreReport = (scores) => {
//   let resultsMap = {};
//   let result = [];

//   for (let int of scores) {
//     // console.log({ int });
//     if (int <= 599) {
//       resultsMap['Poor'] = resultsMap['Poor'] + 1 || 1
//     } else if (int <= 699) {
//       resultsMap['Fair'] = resultsMap['Fair'] + 1 || 1
//     } else if (int <= 749) {
//       resultsMap['Good'] = resultsMap['Good'] + 1 || 1
//     } else if (int <= 799) {
//       resultsMap['Excellent'] = resultsMap['Excellent'] + 1 || 1
//     } else if (int >= 800) {
//       resultsMap['Elite'] = resultsMap['Elite'] + 1 || 1
//     }
//   }

//   let sortedKeys = Object.keys(resultsMap).sort((a, b) => {
//     return resultsMap[a] < resultsMap[b];
//   });

//   for (let key of sortedKeys) {
//     let str = `${key} - ${resultsMap[key]}`;
//     result.push(str);
//   }

//   return result;
// }


// console.log(codingScoreReport([330, 723, 730, 825]));


// function createJobQueue() {
//   addJob: (job) => console.log({ job });
// }

// console.log(createJobQueue.addJob('huh?'));
function createJobQueue(){}
createJobQueue.prototype.addJob = function((job)){ console.log('huh')}
let x = createJobQueue.addJob('maybe');