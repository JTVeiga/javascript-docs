function giveMe3(item1, item2, item3) {
  return `
    1: ${item1}
    2: ${item2}
    3: ${item3}
  `;
}

// return a partial function, removing one argument at a time
const giveMe2 = giveMe3.bind(null, "rock");
const giveMe1 = giveMe2.bind(null, "paper");
const result = giveMe1("scissors");

console.log(result);
// 1: rock
// 2: paper
// 3: scissors
