// A competitive runner would like to create a route that starts and ends at his house, 
// with the condition that the route goes entirely uphill at first, and then entirely downhill.

// Given a dictionary of places of the form {location: elevation}, and a dictionary 
// mapping paths between some of these locations to their corresponding distances, 
// find the length of the shortest route satisfying the condition above. Assume the runner's home is location 0.

// For example, suppose you are given the following input:

const elevations = {0: 5, 1: 25, 2: 15, 3: 20, 4: 10}

const paths = {
  '0_1': 10,
  '0_2': 8,
  '0_3': 15,
  '1_3': 12,
  '2_4': 10,
  '3_4': 5,
  '3_0': 17,
  '4_0': 10
};
// In this case, the shortest valid path would be 0 -> 2 -> 4 -> 0, with a distance of 28.



// BFS - starts at 0, ends at 0
// Must go up then down

function elevationPaths(input, paths) {
  
}

const res = elevationPaths(elevations, paths);
console.log({ res }); // 28