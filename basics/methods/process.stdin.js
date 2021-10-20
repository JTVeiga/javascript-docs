process.stdin.resume();
process.stdin.setEncoding("ascii");

process.stdin.resume();
process.stdin.setEncoding("utf-8");

const textArray = [];
process.stdin.on("data", (line) => {
  textArray.push(line);
});

process.stdin.on("end", () => {
  for (let i = 1; i <= textArray[0]; i++) {
    if (!textArray[i]) break;
    const numbers = textArray[i]
      // .trim()
      .split(" ")
      .map((el) => parseInt(el));
    const sum = numbers.reduce((sum, el) => sum + el, 0);
    process.stdout.write("\n" + sum.toString());
  }
});
