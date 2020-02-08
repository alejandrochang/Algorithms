// Find the shortest path of a matrix

// const matrix = [
//     [0, 1, 0, 1, 0],
//     [0, 0, 1, 0, 0],
//     [0, 0, 1, 1, 0],
//     [0, 0, 0, 0, 0],
//     [0, 1, 0, 1, 0]
//  ];

//  let start = [4,0];
//  let end = [3, 1];

// function getShortestPath(position, end){
//    var queue = [];
//    var validpaths = [];

//    // New points, where we did not check the surroundings:
//    // remember the position and how we got there
//    // initially our starting point and a path containing only this point
//    queue.push({ pos: position, path: [position] });

//     // as long as we have unchecked points
//     while(queue.length > 0){

//       // get next position to check viable directions
//       var obj = queue.shift();
//       var pos = obj.pos;
//       var path = obj.path;

//       // all points in each direction
//       var direction = [ [ pos[0] + 1, pos[1] ], [ pos[0], pos[1] + 1 ], [ pos[0] - 1, pos[1] ], [ pos[0], pos[1] - 1 ] ];

//       for(let i = 0; i < direction.length; i++){

//           // check if out of bounds or in a "wall"
//           if (direction[i][0] < 0 || direction[i][0] >= matrix[0].length) continue;
//           if (direction[i][1] < 0 || direction[i][1] >= matrix[0].length) continue;
//           if (matrix[direction[i][0]][direction[i][1]] != 0) continue;

//           // check if we were at this point with this path already:
//           let visited = false;
//           for (let j = 0; j < path.length; j ++) {
//                if ((path[j][0] == direction[i][0] && path[j][1] == direction[i][1])) {
//                    visited = true;
//                    break;
//               }
//           }
//           if (visited) continue;

//           // copy path
//           let newpath = path.slice(0);
//           // add new point
//           newpath.push(direction[i]);

//           // check if we are at end
//           if (direction[i][0] != end[0] || direction[i][1] != end[1]) {
//              // remember position and the path to it
//              queue.push({pos: direction[i], path: newpath});
//           } else {
//             // remember this path from start to end
//             validpaths.push(newpath);
//             // break here if you want only one shortest path
//           }

//       }
//     }

//     return validpaths[0];
// }

// var paths = getShortestPath(start, end);
// console.log(paths);

let matrix = [
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0]
];

// let start = [4, 0];
// let end = [3, 4];

// const findWay = (position, end) => {
//   let queue = [];// [[[4, 0]]]

//   // matrix[position[0]][position[1]] = 1;
//   queue.push([position]); // store a path, not just a position

//   console.log('queue', queue);

//   while (queue.length > 0) {
//     let path = queue.shift(); // get the path out of the queue
//     let pos = path[path.length-1]; // ... and then the last position from it
//     console.log({ path, pos });
//     let direction = [
//       [pos[0] + 1, pos[1]], // 
//       [pos[0], pos[1] + 1],
//       [pos[0] - 1, pos[1]],
//       [pos[0], pos[1] - 1]
//     ];

//     for (let i = 0; i < direction.length; i++) {
//       // Perform this check first:
//       if (direction[i][0] == end[0] && direction[i][1] == end[1]) {
//         // return the path that led to the find
//         return path.concat([end]); 
//       }
      
//       if (direction[i][0] < 0 || direction[i][0] >= matrix[0].length 
//           || direction[i][1] < 0 || direction[i][1] >= matrix[0].length 
//           || matrix[direction[i][0]][direction[i][1]] != 0) { 
//         continue;
//       }

//       matrix[direction[i][0]][direction[i][1]] = 1;
//       // extend and push the path on the queue
//       queue.push(path.concat([direction[i]])); 
//     }
//   }
// }

// var path = findWay(start, end);
// console.log(JSON.stringify(path));



// let start = [4, 0];
// let end = [3, 4];

// const shortestPathPractice = (start, end) => {
//   let queue = [];
//   matrix[start[0]][start[1]] = 1; //  mark as one
//   queue.push([start]); // store a path and position

//   while (queue.length > 1) {
//     let path = queue.shift(); // [[4, 0]]
//     let pos = path[path.length - 1]; // [4, 0]
    
//     // get all possible directions
//     const directions = [
//       [pos[0] + 1, pos[1]], //
//       [pos[0], pos[1] + 1], //
//       [pos[0] - 1, pos[1]],
//       [pos[0], pos[1] - 1],
//     ];

//     for (let i = 0; i < directions.length; i++) {
//       // if its the end return path
//       if (directions[i][0] === end[0] && directions[i][1] === end[1]) {
//         // return path up to that point
//         return path.concat([end]);
//       }

//       // if out of bounds
//       if (){

//       }

//       matrix[directions[i][0]][directions[i][1]] = 1;
//       // extend and push path on the queue
//       queue.push(path.concat([direction[i]]));
//     }
//   }

// }



// want to start at the path - along the path turn to 1 if visited
// start with a queue BFS (paths, positions) -> stored in queue
// pop one at a time
// check all valid directions once can go
// 