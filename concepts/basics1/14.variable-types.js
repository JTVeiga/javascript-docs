var a = '9';
console.log(a);
console.log(typeof a);

a = parseInt(a); // converted to Int
console.log(a);
console.log(typeof a);

console.log(parseInt('10011', 2)); // Convert to int(10) from binary

// LET declaration

let nomeGato = 'Quincy'; // LET Doesn't let you declare same var twice

function checkScopeVar() {
  var scope = 'Function Scope';
  if (true) {
    var scope = 'Block Scope';
    console.log(scope);
  }
  console.log(scope);
}
checkScopeVar();

function checkScopeLet() {
  let scope = 'Function Scope';
  if (true) {
    let scope = 'Block Scope';
    console.log(scope);
  }
  console.log(scope);
}
checkScopeLet();

// CONST DECLARATION
const s = [5, 7, 2]; // COnstants cannot be modified but can be reassigned
function editInPlace() {
  'use strict';
  s[0] = 2;
  s[1] = 5;
  s[2] = 7;
}
editInPlace();
console.log(s);

// const freeze

function congelarObjeto() {
  'use strict';

  const MATH_CONSTANTS = {
    // Constants in objects can be modified if not used Object.freeze
    PI: 3.14
  };
  Object.freeze(MATH_CONSTANTS);

  try {
    MATH_CONSTANTS.PI = 99;
  } catch (e) {
    console.log(e);
  }

  return MATH_CONSTANTS.PI;
}

const PI = congelarObjeto();
console.log(PI);
