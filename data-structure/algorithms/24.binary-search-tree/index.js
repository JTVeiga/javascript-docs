// --- Directions
//   1) Implement the Node class to create
//   a binary search tree.  The constructor
//   should initialize values 'data', 'left',
//   and 'right'.
//   2) Implement the 'insert' method for the
//   Node class.  Insert should accept an argument
//   'data', then create an insert a new node
//   at the appropriate location in the tree.
//   3) Implement the 'contains' method for the Node
//   class.  Contains should accept a 'data' argument
//   and return the Node in the tree with the same value.
//   If the value isn't in the tree return null.

// BINARY SEARCH TREE
// left.data < data && right.data > data
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
  insert(data) {
    if (data <= this.data) {
      if (!this.left) return (this.left = new Node(data));
      else return this.left.insert(data);
    } else {
      if (!this.right) return (this.right = new Node(data));
      else return this.right.insert(data);
    }
  }

  contains(value) {
    // True if value if found
    if (value === this.data) return this;

    // Recurse with the node on the left or right
    if (value < this.data && this.left) return this.left.contains(value);
    else if (value > this.data && this.right) return this.right.contains(value);

    // False if all iterations do not match
    return null;
  }
}

module.exports = Node;
