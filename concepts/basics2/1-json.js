const fs = require('fs');

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday'
};

// Object -> JSON string
const bookJSON = JSON.stringify(book);
// JSON strings do not have properties. Ex: bookJSON.title doesn't exist

// Save the JSON string
fs.writeFileSync('1-json.json', bookJSON);

// Read the JSON file
const dataBuffer = fs.readFileSync('1-json.json'); // Data here is in binary format
const dataJSON = dataBuffer.toString();

// JSON string -> Object
const parsedData = JSON.parse(dataJSON);
// Object have accessible properties. Ex: parsedData.title

console.log(parsedData.title);
console.log(parsedData.author);

// --------------------

const livro = JSON.parse(fs.readFileSync('1-json.json').toString());
livro.title = 'Como fazer amigos e influenciar pessoas';
livro.author = 'Dale Carnegie';
fs.writeFileSync('1-json.json', JSON.stringify(livro));

// ---

// Change the behavior of the stringify function
const person = {
  name: 'alex',
  toJSON() {
    return 1;
  }
};
const stringifiedPerson = JSON.stringify(person); //Returns 1
console.log(stringifiedPerson);
