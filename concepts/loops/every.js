const family = [
  {
    name: 'Henrique',
    age: 19
  },
  {
    name: 'Laís',
    age: 28
  },
  {
    name: 'Luiz',
    age: 30
  },
  {
    name: 'Simone',
    age: 17
  }
];
const isAdult = (person) => person.age >= 18;

// Returns: true or false. 'true' only is every item in the loop is true
const isEveryoneAdult = family.every(isAdult);
console.log(isEveryoneAdult);

// Palindrome
function compareEachLetter(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}
