const res = "Hello there!".match(/[aeiou]/gi); // returns array of matched letters
const res2 = "!&654., ".match(/[a-z]/gi); // returns null (no match)
const res3 = "Hello there!".match(/[^\w]/gi); // non-letters chars (" ", "!")

console.log(res);
console.log(res2);
console.log(res3);

// Statement /[]/ matches every item inside of the square braces
// Option g: don't stop at first match
// Option i: case insensitives
