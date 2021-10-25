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
const charMap = {
  H: 1,
  e: 2,
  n: 3,
  r: 4
};

// Iterates by the index
for (let index in family) {
  console.log(family[index]);
}

// Iterates by the key in an object
for (let key in charMap) {
  console.log(charMap[key]);
}
