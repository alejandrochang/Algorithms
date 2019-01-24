# Heaps

Another common tree is a heap. Heaps are trees (usually binary trees). The root node always has the highest number in the tree, which means that you can find the maximum value in constant time.

Max - O(1)
Insertion/Deletion - O(log(n))
Lookup - O(n)

Note: If estracting a value needs to be FAST - use a heap.

1. Max-heap
In max-heap each child of a node has a value less than or equal to the node's own value.

2. Min-heap
In a min-heap each child is greater than or equal to its parent. 

A heap is a tree-like datastructure where each node must be ordered in respect to its children. A parents node must always be greater (or less) than a childrens values. There are 2 types of heaps: max heap and min heap. A max heap is where parent nodes values are greater than those of its children. A min heap is where parent nodes are smaller than those of its children. 


<!-- Binary Heap -->
A binary heap are a specific implementation of a heap where each parent can't have more than two children. A complete binary heap has every level filled, except for the bottom level. This level gets populated left to right.

A binary heap keeps the order(priority) of its data. If they're on the same level the order doesn't matter, the order is more characterized by the floor level. They're filled from left to right, until no more elements can be added. Heap starts idx = 1;

Min Heap:
<!-- 
                      1
                  5      9
                10  6   12
 -->

Max Heap:
<!-- 
                    12
                10      9
              5  6    1
 -->

 left child: i * 2
 right child: i * 2 + 1
 left child: i / 2
