const fs = require("fs");

// create json file
// {"title":"Como fazer amigos e influenciar pessoas","author":"Dale Carnegie"}

const book = {
  title: "Ego is the Enemy",
  author: "Ryan Holiday",
};

// Object -> JSON string
const bookJSON = JSON.stringify(book);
// JSON strings do not have properties. Ex: bookJSON.title doesn't exist

// Save the JSON string
fs.writeFileSync("sample.json", bookJSON);

// Read the JSON file
const dataBuffer = fs.readFileSync("sample.json"); // Data here is in binary format
const dataJSON = dataBuffer.toString();

// JSON string -> Object
const parsedData = JSON.parse(dataJSON);
// Object have accessible properties. Ex: parsedData.title

console.log(parsedData.title);
console.log(parsedData.author);

// --------------------

const livro = JSON.parse(fs.readFileSync("sample.json").toString());
livro.title = "Como fazer amigos e influenciar pessoas";
livro.author = "Dale Carnegie";
fs.writeFileSync("sample.json", JSON.stringify(livro));

// ---

// Change the behavior of the stringify function
const person = {
  name: "alex",
  toJSON() {
    return 1;
  },
};
const stringifiedPerson = JSON.stringify(person); //Returns 1
console.log(stringifiedPerson);
