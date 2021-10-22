// O(N)

const purse = ["Credit Card", "Keys", "Money", "Tooth brush", "Perfum"];

// Execute instructions for each element in the array
// Cannot use a 'break' inside of a forEach
purse.forEach((element, index, array) => {
  console.log(element); // Element in the array
  console.log(index); // Index of that element
  console.log(array); // Whole array
});
