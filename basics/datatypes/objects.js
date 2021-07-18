// Object is a structure of key-value pairs
// The 'key' is ALWAYS a string, although it can be fed with plain text without quotes
var meuDog = {
  name: "Pingo", // name is actually 'name'
  legs: 4,
  "number of tails": 1,
  friends: ["Everything"],
  16: "Qualquer coisa", // 16 is actually a string! '16'
};

console.log(meuDog.name);
console.log(meuDog["number of tails"]);
console.log(meuDog[16]);
console.log(meuDog["16"]); // same output

// Update key
meuDog.name = "Xuxu"; // Change property of the object

// Create a new key
meuDog.latir = "aw aw";
meuDog["miar"] = false;

// Delete a key
delete meuDog.miar;
console.log(meuDog.hasOwnProperty("miar")); // Check if the property exists

// Or Operator
function temMiar() {
  return meuDog["miar"] || "Nao tem miar";
}
temMiar();

// Array of objects
var meuSom = [
  {
    artista: "The Beatles",
    titulo: "Sexy Sadie",
    lancamento: 1973,
    formatos: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artista: "Coldplay",
    titulo: "Yellow",
    lancamento: "2002",
    formato: ["Youtube"],
  },
];

// Nested objects
var meuArmazenamento = {
  carro: {
    dentro: {
      "porta luvas": "mapas",
      "assento passageiros": "lanterna",
    },
    fora: {
      "porta malas": "jaqueta",
    },
  },
  aviao: {
    "bagagem de mao": "mochila",
    despachado: "mala",
  },
};
console.log(meuArmazenamento.carro.dentro["porta luvas"]);

// Object creation possibilities

var obj = {}; // Empty object
var obj = new Object(); // Empty object
var obj = Object.create(null); // Empty object

// ---
// Object destructuring
// ASSIGN VARIABLES FROM OBJECTS
var meuObjeto = {
  x: 3.6,
  y: 7.4,
  z: 6.54,
};
/*
var a = meuObjeto.x;
var b = meuObjeto.y;
var c = meuObjeto.z;
*/
var { x: a, y: b, z: c } = meuObjeto;
console.log(a, b, c);

var [x, y, , z] = [1, 2, 3, 4]; // z=1 , x=2, y=4
console.log(x, y, z);

[x, y] = [y, x]; // x=2, y=1
console.log(x, y);

/**
 * ES6 objects
 */

// PROPERTY WITH SAME NAME VARIABLE
const name = "Henrique";
const userAge = 26;

const user = {
  name, // When a property comes from an variable with the same name
  age: userAge,
  location: "Sao Paulo",
};

console.log(user);

// --------------------

// OBJECT DESTRUCTURING
const product = {
  label: "Red notebook",
  price: 3,
  stock: 201,
  salePrice: undefined,
};

// Break the object into individual variables
const { label, stock } = product;

console.log(label);
console.log(stock);

// Break and change variable names
const { label: productLabel, stock: productStock } = product;

console.log(productLabel);
console.log(productStock);

// Default value in case object does not have a property
const { price, rating = 5 } = product; // There is no rating property

console.log(price);
console.log(rating);

// Default values does not over write the original value
const { price: productPrice = 100 } = product;

console.log(productPrice);

// --------------------

// DESTRUCTURING IN FUNCTION ARGUMENT
const transaction = (type, { label: myLabel, stock: myStock }) => {
  // Destructuring "product" properties
  console.log(myLabel);
  console.log(myStock);
};
transaction("order", product);
