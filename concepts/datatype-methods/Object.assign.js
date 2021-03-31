const person = {
  name: 'Henrique',
  age: 26,
  height: 181
};

const update = {
  age: 27, // Will be updated
  weight: 75 // Will be created
};

// Copy all the props from the 2nd arg and copy to the 1st
Object.assign(person, update);
console.log(person);

// console.log({ ...person, ...update }); // Same effect with ES6
