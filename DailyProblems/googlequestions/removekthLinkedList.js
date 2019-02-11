// This problem was asked by Google.

// Given a singly linked list and an integer k, remove the kth last element from the list.
// k is guaranteed to be smaller than the length of the list.

// The list is very long, so making more than one pass is prohibitively expensive.

// Do this in constant space and in one pass.

function removeKth(list, k) {
  let nodeFromK = list.head;
  let node = list.head;

  while (k > 0) {
    node = node.next;
    k--;
  }
  
  while (node.next) {
    node = node.next;
    nodeFromK = nodeFromK.next;
  }

  return nodeFromK;
}