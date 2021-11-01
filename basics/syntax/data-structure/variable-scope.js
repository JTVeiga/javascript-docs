var myVar = "Henrique"; // accessible throughout the whole program
let myLet = "Vitoi"; // accessible only in the section that it was declared
const myConst = 3.14; // cannot be changed

function checkScopeVar() {
  var scope = "Function Scope";
  if (true) {
    var scope = "Block Scope"; // completely override the first declaration
    console.log(scope);
  }
  console.log(scope);
}
checkScopeVar();

function checkScopeLet() {
  let scope = "Function Scope";
  if (true) {
    let scope = "Block Scope"; // keep the outter scope variable
    console.log(scope);
  }
  console.log(scope);
}
checkScopeLet();
