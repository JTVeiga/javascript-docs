// --- Directions
//   1) Create a node class.  The constructor
//   should accept an argument that gets assigned
//   to the data property and initialize an
//   empty array for storing children. The node
//   class should have methods 'add' and 'remove'.
//   2) Create a tree class. The tree constructor
//   should initialize a 'root' property to null.
//   3) Implement 'traverseBF' and 'traverseDF'
//   on the tree class.  Each method should accept a
//   function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }
  add(data) {
    this.children.push(new Node(data));
  }
  remove(data) {
    // Removes every node that matches the data
    this.children = this.children.filter((child) => {
      return child.data !== data;
    });
  }
}

// A tree has a 'root' property, which is the node at the top
class Tree {
  constructor() {
    this.root = null;
  }
  // Traverse by breadth first (broad)
  traverseBF(fn) {
    const nodes = [this.root];

    // Iterates while there is any value inside of the array
    while (nodes.length) {
      const node = nodes.shift(); // Take the first and remove
      fn(node); // Run the current node
      nodes.push(...node.children); // Push its children to the end
      // Spread operator! Split the elements of the array
    }
  }
  // Traverse by depth first (deep)
  traverseDF(fn) {
    const nodes = [this.root];
    while (nodes.length) {
      const node = nodes.shift(); // Take the first and remove
      fn(node); // Run the current node
      nodes.unshift(...node.children); // Push its children to the start
    }
  }
  traverseDF_recursive(fn, node = this.root) {
    fn(node);
    const num_children = node.children.length;
    if (!num_children) return; // Base case
    for (let i = 0; i < num_children; i++) {
      this.traverseDF_recursive(fn, node.children[i]);
    }
  }

  traverseDF_recursive2(fn, nodes = [this.root]) {
    if (nodes.length === 0) return;
    for (let node of nodes) {
      fn(node);
      traverseDF_recursive2(node.children);
    }
  }
}

module.exports = { Tree, Node };
