const word = 'Hi there!!!!';

// Replace special characters with nothing ''
const newword = word.replace(/[^\w]/g, '');
console.log(newword);
