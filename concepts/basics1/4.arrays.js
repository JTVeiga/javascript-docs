//ARRAYS
var singleArray = ['Henrique', 1];
var multiArray = [
  ['Bulls', 14],
  ['White Sox', 60],
  ['Quincy', 98]
];

console.log(multiArray[0][0]);
multiArray[0][0] = 'Rox';
console.log(multiArray[0][0]);

multiArray.push(['Happy', 22]); // Add new item to last position
console.log(multiArray);

multiArray.unshift(['Sad', 78]); // Add new item to first position
console.log(multiArray);

console.log(multiArray.pop()); // Remove last item and shows it
console.log(multiArray);

console.log(multiArray.shift()); // Remove first item and shows it
console.log(multiArray);

var exFila = [1, 2, 3, 4, 5];
function fila(arr, item) {
  arr.push(item);
  return arr.shift();
}
console.log('Before: ' + JSON.stringify(exFila));
console.log(fila(exFila, 6));
console.log('After: ' + JSON.stringify(exFila));
