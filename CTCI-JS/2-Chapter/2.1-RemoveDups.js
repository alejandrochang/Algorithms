let linkedList = require('./LinkedList');

function removeDups(head) {
  let node = head;
  while (node !== null) {
    if (node.next !== null && checkForDups(node, node.next));
  }
}

function checkForDups(node, nextNode) {
  while (node !== nextNode) {
    if (node.value === nextNode.value) {
      return true;
    }
  }
}



// while 