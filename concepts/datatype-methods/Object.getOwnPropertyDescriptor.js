// Get the configuration object about a object key
// value: 'honda'
// writable: true // can update?
// enumerable: true // if it can be loop in a forin
// configurable: true

const car = { make: 'honda', year: 2000 };
const info = Object.getOwnPropertyDescriptor(car, 'make');
console.log(info);

// Change the configuration object
Object.defineProperty(car, 'make', { writable: false });
car.make = 'chevy'; // Doesn't update anymore!
console.log(car);
