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

/**
 *
 *
 *
 *
 */
const returnHaha = new Promise((resolve) => {
  setTimeout(() => {
    resolve('haha');
  }, 1000);
});
const returnHehe = new Promise((resolve) => {
  setTimeout(() => {
    resolve('hehe');
  }, 1000);
});
const returnHihi = new Promise((resolve) => {
  setTimeout(() => {
    resolve('hihi');
  }, 1000);
});
const laughPromises = [returnHaha, returnHehe, returnHihi];

// ---

const findHehe = async () => {
  let myLaugh;
  for (let laughPromise of laughPromises) {
    const res = await laughPromise;
    if (res === 'hehe') {
      myLaugh = res;
      break;
    }
  }
  if (myLaugh) {
    return myLaugh;
  } else {
    return await laughPromises[0];
  }
};

// ---

(async () => console.log(await findHehe()))();
