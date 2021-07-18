// ARROW Function - Anonymous function

var magic1 = function () {
  return new Date();
};
var magic2 = () => {
  return new Date();
};
const magic = () => new Date();
magic();

const concatenaArray = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenaArray([1, 2], [3, 4, 5]));

const squareList = (arr) => {
  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);
  return squaredIntegers;
};
const squaredIntegers = squareList([4, 5.6, -9.8, 3.14, 42, 6, 8, 34, -2]);
console.log(squaredIntegers);

// Use default parameter if not explicited
const increment = (function () {
  return function increment(number, value = 1) {
    return number + value;
  };
})();

// RETURNING OBJECT IN ARROW FUNCTION
const createPerson = (name, age, gender) => ({ name, age, gender });
console.log(createPerson("Henrqiue", 25, "male"));

/**
 *
 *
 */

const square1 = function (x) {
  return x * x;
};
const square2 = (x) => {
  return x * x;
};
const square3 = (x) => x * x; // Only for one-line returning functions

console.log(square1(5));
console.log(square2(5));
console.log(square3(5));

// -----

// Conventional function property
const event1 = {
  name: "Birthday Party",
  printGuestList: function () {
    console.log(`Guest list for ${this.name}`);
  },
};

// Property with arrow function DO NOT have access to 'this' statement
const event2 = {
  name: "Birthday Party",

  printGuestList: () => {
    console.log(`Guest list for ${this.name}`);
  },
};

// Standard function declaration in objects
const event3 = {
  name: "Birthday Party",
  guestList: ["Maria", "Joao", "Henrique"],
  printGuestList() {
    // Initinal text
    console.log(`Guest list for ${this.name}`);

    // Loop the guest array
    this.guestList.forEach((guest) => {
      console.log(`${guest} is attending the ${this.name}`);
    });
    // Arrow functions don't bind its own 'this' value!
  },
};

event1.printGuestList();
event2.printGuestList();
event3.printGuestList();

// -----

const tasks = {
  tasks: [
    {
      text: "Grocery shopping",
      completed: true,
    },
    {
      text: "Clean yard",
      completed: false,
    },
    {
      text: "Film course",
      completed: false,
    },
  ],
  getTasksToDo() {
    return this.tasks.filter((task) => task.completed === false);
  },
};

console.log(tasks.getTasksToDo());
