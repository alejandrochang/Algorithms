# Trees and Graphs 

### Trees
A tree is made up of Nodes with 0, 1 to several different pointers to other Nodes. Each Node has 
children that is an array with all of that nodes children and so forth. 

1. Parent - A node that points to other nodes is the parent of those nodes. Every node except the root has one parent. 
2. Child - A node is the child of any node that points to it. 
3. Parent - All the nodes that can be reached by following a path of child nodes from a particular node are the descendents of that node. 
4. Ancestor - An ancestor of a node is any other node for which the node is a descendant. 
5. Leaves - The leaves are nodes that do not have any children.

Traversing a regular tree is O(n) as you have to go through every possibility. 

Methods: constructor, add, remove

```js
class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => {
      return node.data !== data;
    });
  }
}

```

### Binary Trees/ Binary Search Trees
A Binary tree is a tree in which each node has no more than two children, referred to as left and right. If there is a question about a tree it is good to destinguish between a tree, binary tree anf BST.

BST:
A binary search tree is a special kind of tree. The value held by a node's left child is less than or equal to its own value <=, and the value on the right side of the tree is greater than or equal to the node's value >=. All descendants to the left are less than the root node and descendants to the right are greater than the root node. 

* Every Node has 0, 1 or 2 children.

Access - Search - Insertion - Deletion
Average - O(log(n)) - Worst Case - O(n);
O(log(n)) lookup to traverse the tree - similar to Bsearch, 

2^x = n -> log2^n = x -> log(n)

```js
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data);
    } else if (data < this.data) {
      this.left = new Node(data);
    } else if (data > this.data && this.right) {
      this.right.insert(data);
    } else if (data > this.data) {
      this.right = new Node(data);
    }
  }

  contains(data) {
    if (data === this.data) {
      return this;
    } 
    
    if (data < this.data && this.left) {
      return this.left.contains(data);
    } else if (data > this.data && this.right) {
      return this.right.contains(data);
    }

    return null;
  }
}
```

Many tree oepratinos can be implement recursively. The recursive implementation may not be the most efficient, but its a good place to start. 

Common Searches:
It's convenient when you have a tree such as ordering properties in a Heap or BST. Most of the time you're given a tree that isn't a BST or heap. Examples: Military rankings, family tree, organization chart. One common ask is when searching for a specific node, when you search a tree without ordering the worst case will always be O(n). To common algorithms to aid in this task: BFS(Breadth First Search) and DFS(Depth First Search).

### Traversals 
Another common tree problem is a traversal. A traversal is just like a search, except that instead of stopping when you find a particular target node, you visit every node in the tree. Often used to perform some operation on each node in the tree. 

Depth-First-Traversals (Common):
1. Preorder - Performs the operations first on the node itself, then on its left descendants, and finally on its right descendants. A node is always visited before any of its children. root + left subtree + right subtree

2. Inorder - Performs the operations first on the node's left descendants, then on the node itself and finally on its right descendants. Left subtree + root + right subtree.

3. Postorder - Performs the opreations first on the node's left descendants, the on the nodes right descendants and finally on the node itself.  Left subtree + right subtree + root

Traversal: Recursion is a good way to start thinking about the problem. 

### Graphs
A tree is a actually a special case of a prah. Unlike tree nodes, graph nodes (vertices) can have multiple 'parents', possinly creating a loop or a cycle. The links between nodes as well as the nodes themselves may have values or weights. These links are called edges and may containe more information than just the pointer. A graph with one way edges is called a directed graph. A graph with two-way pointers is called an undirected graph. 

Common representation of is to use an adjacency list: a list of references to other nodes with which the node shares edges. This list is analogous to the child references of the tree node data structure. 