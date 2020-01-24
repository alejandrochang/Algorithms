// Find the shortest path of a matrix

const matrix = [
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 1, 0]
 ];

 let start = [4,0];
 let end = [1,1];

function getShortestPath(position, end){
   var queue = [];
   var validpaths = [];

   // New points, where we did not check the surroundings:
   // remember the position and how we got there
   // initially our starting point and a path containing only this point
   queue.push({pos: position, path: [position]});

    // as long as we have unchecked points
    while(queue.length > 0){

      // get next position to check viable directions
      var obj = queue.shift();
      var pos = obj.pos;
      var path = obj.path;

      // all points in each direction
      var direction = [ [ pos[0] + 1, pos[1] ], [ pos[0], pos[1] + 1 ],
                   [ pos[0] - 1, pos[1] ], [ pos[0], pos[1] - 1 ] ];

      for(var i = 0; i < direction.length; i++){

          // check if out of bounds or in a "wall"
          if (direction[i][0] < 0 || direction[i][0] >= matrix[0].length) continue;
          if (direction[i][1] < 0 || direction[i][1] >= matrix[0].length) continue;
          if (matrix[direction[i][0]][direction[i][1]] != 0) continue;

          // check if we were at this point with this path already:
          var visited = false;
          for (var j = 0; j < path.length; j ++) {
               if ((path[j][0] == direction[i][0] && path[j][1] == direction[i][1])) {
                   visited = true;
                   break;
              }
          }
          if (visited) continue;

          // copy path
          var newpath = path.slice(0);
          // add new point
          newpath.push(direction[i]);

          // check if we are at end
          if (direction[i][0] != end[0] || direction[i][1] != end[1]) {
             // remember position and the path to it
             queue.push({pos: direction[i], path: newpath});
          } else {
            // remember this path from start to end
            validpaths.push(newpath);
            // break here if you want only one shortest path
          }

      }
    }
    return validpaths;
}

var paths = getShortestPath(start, end);
console.log(paths);
