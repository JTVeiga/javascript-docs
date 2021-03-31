// MAP
var map = new Map(); // Mapa vazio
var map = new Map([
  ['a', 1],
  ['b', 2]
]); // Map(2) { 'a' => 1, 'b' => 2 }

// Get value by key
console.log(map.get('a')); // 1

// Check if key exists
console.log(map.has('c')); // false

// Add/update new key-value
console.log(map.set('c', 3)); // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

// Delete key-value
var isDeleteSucceeded = map.delete('a');
console.log(isDeleteSucceeded); // true
console.log(map);

// Length
console.log(map.size);

// Iteration
//console.log(typeof obj[Symbol.iterator]); // undefined
console.log(typeof map[Symbol.iterator]); // function
for (const item of map) console.log(item);
for (const [key, value] of map) console.log(`key: ${key}, value: ${value}`);
map.forEach((value, key) => console.log(`key: ${key}, value: ${value}`));

// Clear everything
map.clear();
console.log(map);
