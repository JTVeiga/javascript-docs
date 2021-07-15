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

// BINARY SEARCH TREE
// left.data < data && right.data > data
