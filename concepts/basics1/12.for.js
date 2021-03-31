// FOR
var arrayFor = [];
for (var i = 0; i < 5; i++) {
  arrayFor.push(i);
}
console.log(arrayFor);

var nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6, 7]
];
for (var i = 0; i < nestedArray.length; i++) {
  for (var j = 0; j < nestedArray[i].length; j++) {
    console.log(nestedArray[i][j]);
  }
}
