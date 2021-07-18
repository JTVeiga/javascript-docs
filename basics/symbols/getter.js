// Getter / Accessor

//A method inside of a class that can be called as a property

class Word {
  constructor() {
    this.myWords = ["banana", "apple", "pineapple"];
  }
  printSomething(something) {
    console.log(something);
  }

  // Getter returning a property!
  get length() {
    return this.myWords.length;
  }

  // Getter returning a function!
  get justPrint() {
    return this.printSomething;
  }
}

const words = new Word();
console.log(words.length); // get length
words.justPrint("Hey there!"); // get justPrint
