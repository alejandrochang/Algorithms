/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return null;
  // use map to 
  const map = new Map();
  let node = head;

  const getNode = (n) => {
    if (!n) return null;
    if (map.has(n)) return map.get(n);
    const clone = new Node(n.val, null, null);
    map.set(n, clone);

    return clone;
  }

  while (node) {
    let clone = getNode(n);
    clone.next = getNode(n.next);
    clone.random = getNode(n.random);

    node = node.next;
  }

  return map.get(head);
}


// if !head return
// inputs/outputs
// vague/abigous - to see how you can tackle that





// create helper function that determines whether we need 
// a vali node, or a new Node that needs to be created
// we'll use Map() to store the node values that are passed in for easy access
// while nodes -> create Node


// var copyRandomList = function (head) {
//   if (!head) return null;
//   const map = new Map();
//   let node = head;

//   const getNode = (n) => {
//     if (!n) return null;
//     if (map.has(n)) return map.get(n);
//     const clone = new Node(n.val, null, null);
//     map.set(n, clone);
//     return clone;
//   };

//   while (node) {
//     let clone = getNode(node);
//     clone.next = getNode(node.next);
//     clone.random = getNode(node.random);

//     node = node.next;
//   }

//   console.log({ map });
//   return map.get(head);
// };