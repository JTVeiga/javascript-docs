// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(data) {
    // If there is no head yet, this.head is null
    // If there is head, new this.head points to the last head
    this.head = new Node(data, this.head);
  }
  size() {
    let node = this.head;
    let size = 0;
    while (node) {
      size++;
      node = node.next;
    }
    return size;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let lastNode = this.head;
    if (!lastNode) return null; // return null if there are no elements
    while (lastNode.next) lastNode = lastNode.next;
    return lastNode;
  }
  clear() {
    this.head = null;
  }
  removeFirst() {
    // If there is any element ...
    if (this.head) this.head = this.head.next;
  }
  removeLast() {
    let node = this.head;

    // If there is no elements...
    if (!node) return;

    // If there is only one element
    if (!node.next) {
      this.head = null;
      return;
    }

    // Run until arrive in the penultimate element
    while (node.next.next) node = node.next;

    // Assign null to the next of the penultimate element
    node.next = null;
  }
  insertLast(data) {
    let last = this.getLast();
    if (last) {
      last.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }
  getAt(index) {
    // Check if index is valid
    if (index >= this.size() || index < 0) return null;

    let node = this.head;

    // Go to the node of index 'index'
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node;
  }
  removeAt(index) {
    // Check there is a node for the index 'index'
    if (!this.getAt(index)) return null;

    // Handle case the node is the first
    if (index === 0) {
      this.head = this.getAt(index + 1) || null;
      return;
    }

    // Skip the Node of index 'index'
    this.getAt(index - 1).next = this.getAt(index + 1) || null; // if there is no next element then null
  }
  insertAt(data, index) {
    // Insert node at index <=0
    if (index <= 0) {
      this.head = new Node(data, this.head);
      return;
    }
    // Insert node at index >= size
    if (index >= this.size()) {
      this.getLast().next = new Node(data);
      return;
    }

    // Insert node inside of bounds
    this.getAt(index - 1).next = new Node(data, this.getAt(index));
  }
  // ************************************* Passing a function as an argument!
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

// getAt and insertAt and substitute many other functions!
module.exports = { Node, LinkedList };
