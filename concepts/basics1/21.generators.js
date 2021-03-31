// Gerators are functions that can be exited and later re-entered. Returns a Generator Object
// Arrow-functons can not be used as generators!

function* test() {
  const result = 1 + 1;
  return 20 + (yield result);
}
// Create Generator Object
var generator = test();
console.log(generator);

// Step through the 'yield results' with the 'next' method.
var next = generator.next();
console.log(next); // Object with 'value' and 'done' keys

// Call 'next' second time WITH a value
var next = generator.next(10);
console.log(next); // (yield result) is replaced with the argument passed!

// ---------------------------------

// Generator function
function* list() {
  yield 1;
  yield 2;
  yield 3;
}
// Create Generator Object
var generator = list();

// 1st 'next'
var next = generator.next();
console.log(next); // Returns the 1st yield statement

// 2nd 'next'
var next = generator.next();
console.log(next); // Returns the 2nd yield statement

// 3rd 'next'
var next = generator.next();
console.log(next); // Returns the 3rd yield statement

// Last 'next'
var next = generator.next();
console.log(next); // No more yields. Return undefined. 'done' sets to 'true'

// ---------------------------------

function* list2() {
  yield 1;
  yield 2;
  yield 3;
}
var generator = list2();

// Saves the yields into an array
var values = [];
for (let value of generator) {
  values.push(value);
}
console.log(values);

// ---------------------------------

function* numbers() {
  yield 1;
  yield 2;
  yield* moreNumbers(); // Nested generator
  yield 6;
  yield 7;
}

function* moreNumbers() {
  yield 3;
  yield 4;
  yield 5;
}

var generator = numbers();

var values = [];
for (let value of generator) {
  values.push(value);
}
console.log(values);

// ---------------------------------
// GENERATOR AS A METHOD (PROPERTY) IN A CLASS

class Tree {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }
  *printValues() {
    // First yield the node's value
    yield this.value;
    // On next(), yield the values of each child
    for (let child of this.children) {
      yield* child.printValues();
    }
  }
}
var tree = new Tree(1, [new Tree(2, [new Tree(4)]), new Tree(3)]);

// Calling the next() from the generator object
var values = [];
for (let value of tree.printValues()) {
  values.push(value);
}
console.log(values);

// ---------------------------------
// ITERATOR
// Iterator is a generator function with a key of iterator [Symbol.iterator]
