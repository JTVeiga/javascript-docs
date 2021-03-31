// ASSIGN VARIABLES FROM OBJECTS
var meuObjeto = {
  x: 3.6,
  y: 7.4,
  z: 6.54
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
