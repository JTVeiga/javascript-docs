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
}
