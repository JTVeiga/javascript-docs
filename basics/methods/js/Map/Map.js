var map = new Map(); // empty map
var map = new Map([
  ["a", 1],
  ["b", 2],
]); // Map(2) { 'a' => 1, 'b' => 2 }

// get value by key
map.get("a"); // 1

// check if key exists
map.has("c"); // false

// add/update key-value
map.set("c", 3); // Map(3) { 'a' => 1, 'b' => 2, 'c' => 3 }

// delete key-value
map.delete("a"); // true

// size
map.size;

// Iteration
//console.log(typeof obj[Symbol.iterator]); // undefined
console.log(typeof map[Symbol.iterator]); // function
for (const item of map) console.log(item);
for (const [key, value] of map) console.log(`key: ${key}, value: ${value}`);
map.forEach((value, key) => console.log(`key: ${key}, value: ${value}`));

// clear everything
map.clear();
