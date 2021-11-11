const set = new Set(["b", "c", "a"]);
console.log(set);
console.log(set.size);

set.add("d");
set.add("a"); // no effect - "a" already exists

set.delete("b");

set.has("a"); // true

set.keys(); // returns an iterator
set.values(); // returns an iterator

set.forEach((el) => console.log(el));

set.clear();
