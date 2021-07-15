class LinkedList {
  constructor() {
    this.head = null;
  }
  forEach(fn) {
    let node = this.head;
    let index = 0;
    while (node) {
      fn(node, index);
      node = node.next;
      index++;
    }
  }
  // ********************************** Setup a generator function for a loop
  // Allows the list to be iterated with a for-of loop
  *[Symbol.iterator]() {
    let node = this.head;
    while (node) {
      yield node;
      node = node.next;
    }
  }
}
