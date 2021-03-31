// REST OPERATOR
var source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var [, , ...arr] = source; //don't count the first 2 elements
console.log(arr);

// Spread arguments received
function printStrings(...keys) {
  console.log(keys); // print an array of strings
}
printStrings('apple', 'orange', 'banana');
