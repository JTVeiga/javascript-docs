const desserts = [
  {
    name: 'pudim',
    diet: false
  },
  {
    name: 'gelatina',
    diet: false
  },
  {
    name: 'bolo de chocolate',
    diet: true
  },
  {
    name: 'pavê',
    diet: true
  }
];
const isDiet = (item) => item.diet;

// Returns the first element that matches the criteria
const firstDietDessert = desserts.find(isDiet);
console.log(firstDietDessert);
