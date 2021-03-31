function printNested(obj, level = 0) {
  Object.entries(obj).map(([key, value]) => {
    const spacing = " ".repeat(level);
    if (typeof value === "object") {
      console.log(`${spacing}${key} {`);
      printNested(value, level + 1);
      console.log(`${spacing}}`);
    } else {
      console.log(`${spacing}${key}: ${value}`);
    }
  });
}

const myObj = {
  a: "1",
  b: 2,
  c: {
    d: 3,
    e: {
      f: 4,
      g: 5,
    },
    h: 6,
  },
};

// Take the key:value pair of each element and put in an array
const entries = Object.entries(myObj);
console.log(entries);
