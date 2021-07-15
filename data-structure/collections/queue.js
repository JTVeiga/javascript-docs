// push: add to last
// unshift: add to first

// pop: remove from last
// shift: remove from first

// Queue = FIFO (First In, First Out)
class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    this.data.unshift(record); // Add to the first place
  }

  remove() {
    return this.data.pop(); // Remove from the last place
  }
}
