const text = 'Hello there!';
const letter = ' ';

const res = text.match(/[aeiou]/gi); // vowels

// returns `null` if found
// returns the matching words array if found

// Statement /[]/ matches every item inside of the square braces
// Option g: don't stop at first match
// Option i: case insensitive

const res2 = letter.match(/[a-z]/gi);

console.log(res);
console.log(res2);
