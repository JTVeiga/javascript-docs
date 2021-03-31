// FUNCTIONS
function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = '';
  result =
    'The ' +
    myAdjective +
    ' ' +
    myNoun +
    ' ' +
    myVerb +
    ' to the store ' +
    myAdverb;
  return result;
}
console.log(wordBlanks('dog', 'beautiful', 'run', 'happily'));

// SCOPE
function sayHi() {
  var nome1 = 'Henrique'; // Local in the function
  nome2 = 'Lais'; // Global
  console.log('Hi ' + nome1 + ' and ' + nome2);
}
sayHi();
console.log(typeof nome1);
console.log(typeof nome2);

var nome = 'Henrique';
function sayHello() {
  var nome = 'Lais'; // local nome is shown instead of the global nome
  console.log('Hello ' + nome);
}
sayHello();

// FUNCTION IN OBJECTS
var bicycle = {
  gear: 2,
  setGear: function (newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);

var bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
console.log(bicycle.gear);
