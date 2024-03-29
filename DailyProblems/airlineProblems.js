// You are given a huge list of airline ticket prices between different cities around the world on a given day. 
// These are all direct flights. Each element in the list has the format (source_city, destination, price).

// Consider a user who is willing to take up to k connections from their origin city A to their destination B.
//  Find the cheapest fare possible for this journey and print the itinerary for that journey.

// For example, our traveler wants to go from JFK to LAX with up to 3 connections, and our input flights are as follows:

// [
//     ['JFK', 'ATL', 150],
//     ['ATL', 'SFO', 400],
//     ['ORD', 'LAX', 200],
//     ['LAX', 'DFW', 80],
//     ['JFK', 'HKG', 800],
//     ['ATL', 'ORD', 90],
//     ['JFK', 'LAX', 500],
// ]
// Due to some improbably low flight prices, the cheapest itinerary would be JFK -> ATL -> ORD -> LAX, costing $440.


const connections = [
  ['JFK', 'ATL', 150],
  ['ATL', 'SFO', 400],
  ['ORD', 'LAX', 200],
  ['LAX', 'DFW', 80],
  ['JFK', 'HKG', 800],
  ['ATL', 'ORD', 90],
  ['JFK', 'LAX', 500],
];

// q = [{'ATL', 150}]
// q = [{'SFO', 550}, {'ORD', 350}]
// q = ['LAX']

// DFS problem - get all flights + cost

function getCheapestFlight(departingCity, destinationCity, k) {
  const result = [];
  const q = [departingCity];
  while (q.length > 0) {
    q.shift(); // 'JFK';

    connections.forEach(connection => {
      const [d, a, p] = connection;
      if (d === departingCity) {
        result.push({ itinerary: [d], totalCost: p });
        q.push(a);
      }
    });
  }

  // getList(departingCity, destinationCity, k);
  console.log('res', result);
}

const res = getCheapestFlight('JFK', 'LAX', 3);
console.log({ res });


// recursively go through all connections from JFK -> LAX - store the list
// and store the price