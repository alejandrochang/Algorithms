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