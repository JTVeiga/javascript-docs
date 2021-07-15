// push: add to last
// unshift: add to first

// pop: remove from last
// shift: remove from first

// Stack = LIFO (Last In, First Out)
class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    return this.data[this.data.length - 1];
  }
}
