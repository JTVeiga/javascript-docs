const order = [-100, -20, -1, 0, 1, 20, 100];
const arr = [1, 0, -1, 1, -20, 20, 100, -100];

const squareAndSort = (arr) => {
  squared = arr.map((item) => item ** 2);
  squaredSorted = squared.sort((a, b) => a - b);
  return squaredSorted;
};

const moduleAndSort = (arr) => {
  // First take the module of each number
  for (let key in arr) {
    arr[key] = arr[key] * Math.sign(arr[key]);
  }

  // BUBBLE SORT (instead of storing the max value, stores the min value)
  for (let i = 0; i < arr.length - 1; i++) {
    // the element at index i will always store the minium value at each outer loop iteration
    for (let j = i; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[i]) {
        const aux = arr[i];
        arr[i] = arr[j + 1]; // put the minium value to the first index of the loop
        arr[j + 1] = aux;
      }
    }
    arr[i] = arr[i] ** 2;
  }
  arr[arr.length - 1] = arr[arr.length - 1] ** 2;
  return arr;
};

console.log(squareAndSort(arr));
console.log(moduleAndSort(arr));
