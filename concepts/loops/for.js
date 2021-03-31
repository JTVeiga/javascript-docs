const purse = ['Credit Card', 'Keys', 'Money', 'Tooth brush', 'Perfum'];

for (let i = 0; i < purse.length; i++) {
  console.log(purse[i]);
  if (purse[i] == 'Money') break; // Stops the for loop after printing 'Money'
}

for (let i = 0; i < purse.length; i++) {
  if (purse[i] == 'Money') continue; // Skip printing 'Money' and continues the loop
  console.log(purse[i]);
}
