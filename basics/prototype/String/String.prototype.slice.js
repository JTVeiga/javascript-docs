const text = "Hey there";

// Copy from index 0 to index 2
const slice = text.slice(0, 3);
console.log(slice);

// Everything from index 2 and beyond
const slice2 = text.slice(2);
console.log(slice2);

// from first until the second last (penult)
const slice3 = text.slice(0, -2);
console.log(slice3);
