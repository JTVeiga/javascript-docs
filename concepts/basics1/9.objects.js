// Object is a structure of key-value pairs
// The 'key' is ALWAYS a string, although it can be fed with plain text without quotes
var meuDog = {
  name: 'Pingo', // name is actually 'name'
  legs: 4,
  'number of tails': 1,
  friends: ['Everything'],
  16: 'Qualquer coisa' // 16 is actually a string! '16'
};

console.log(meuDog.name);
console.log(meuDog['number of tails']);
console.log(meuDog[16]);
console.log(meuDog['16']); // same output

// Update key
meuDog.name = 'Xuxu'; // Change property of the object

// Create a new key
meuDog.latir = 'aw aw';
meuDog['miar'] = false;

// Delete a key
delete meuDog.miar;
console.log(meuDog.hasOwnProperty('miar')); // Check if the property exists

// Or Operator
function temMiar() {
  return meuDog['miar'] || 'Nao tem miar';
}
temMiar();

// Array of objects
var meuSom = [
  {
    artista: 'The Beatles',
    titulo: 'Sexy Sadie',
    lancamento: 1973,
    formatos: ['CD', '8T', 'LP'],
    gold: true
  },
  {
    artista: 'Coldplay',
    titulo: 'Yellow',
    lancamento: '2002',
    formato: ['Youtube']
  }
];

// Nested objects
var meuArmazenamento = {
  carro: {
    dentro: {
      'porta luvas': 'mapas',
      'assento passageiros': 'lanterna'
    },
    fora: {
      'porta malas': 'jaqueta'
    }
  },
  aviao: {
    'bagagem de mao': 'mochila',
    despachado: 'mala'
  }
};
console.log(meuArmazenamento.carro.dentro['porta luvas']);

// Object creation possibilities

var obj = {}; // Empty object
var obj = new Object(); // Empty object
var obj = Object.create(null); // Empty object
