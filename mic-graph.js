// This problem was asked by Microsoft.

// The transitive closure of a graph is a measure of which vertices are 
// reachable from other vertices. It can be represented as a 
// matrix M, where M[i][j] == 1 if there is a path between vertices i and j, and otherwise 0.

// For example, suppose we are given the following graph in adjacency list form:

const graph = [
    [0, 1, 3],
    [1, 2],
    [2],
    [3]
];

function micGraphJs(graph) {
  return graph;
}

// The transitive closure of this graph would be:

// [1, 1, 1, 1]
// [0, 1, 1, 0]
// [0, 0, 1, 0]
// [0, 0, 0, 1]