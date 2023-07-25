


const logs = [
  { id: 0, timeout: 0, eventType: 'Start'},
  { id: 1, timeout: 1, eventType: 'Start'},
  { id: 0, timeout: 2, eventType: 'End'},
  { id: 2, timeout: 3, eventType: 'Start'},
  { id: 1, timeout: 4, eventType: 'End'},
  { id: 2, timeout: 3, eventType: 'End'},
];


function getTimeout(logs, timeoutPassed) {
  const logStarts = {};

  for (let log of logs) {
    const { id, eventType, timeout } = log
    if (eventType === 'Start') {
      // store in memory to access in end
      logStarts[id] = log;
    } else {
      // EventType is end
      const diff = timeout - logStarts[id].timeout;
      if (timeoutPassed <= diff) {
        console.log(log);
        return log;
      }
    }
  }

  return -1;
}


const res = getTimeout(logs, 2);
const res2 = getTimeout(logs, 2);
console.log({ res, res2 }); //   { id: 0, timeout: 2, eventType: 'End'},

