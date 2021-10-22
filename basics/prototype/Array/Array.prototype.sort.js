// O(N log N)

const numbers = [2, 5, 1000, 3, 4];
const letters = ["d", "b", "c", "a"];

// Sort numbers in increasing order (Checks number from left to right!)
const sortedNumbers = numbers.sort();
console.log(sortedNumbers);

// Sort numbers in alphabetical order
const sortedLetters = letters.sort();
console.log(sortedLetters);

// ---

// By default, array.sort sorts alphabetically, that means 1000 comes before 2
// You can fix this by providing a "compare function"
points.sort((a, b) => a - b); // ascending order
points.sort((a, b) => b - a); // descending order
