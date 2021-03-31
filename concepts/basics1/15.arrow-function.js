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
console.log(createPerson('Henrqiue', 25, 'male'));
