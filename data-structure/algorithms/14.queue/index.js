// --- Description
//   Create a queue data structure.  The queue
//   should be a class with methods 'add' and 'remove'.
//   Adding to the queue should store an element until
//   it is removed
// --- Examples
//   const q = new Queue();
//   q.add(1);
//   q.remove(); // returns 1;

class Queue {
  constructor() {
    this.data = [];
  }

  add(record) {
    //this.data.unshift(record);
    this.data.push(record);
  }

  remove() {
    // return this.data.pop();
    return this.data.shift();
  }
}

const myQueue = new Queue();
console.log(myQueue.data);

module.exports = Queue;
