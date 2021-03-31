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
const phrase = 'Once upon a time';

// Iterates array
for (let element of family) {
  console.log(element);
}

// Iterates a string
for (let letter of phrase) {
  console.log(letter);
}

// Obs: Objects are not interable in forof!!
