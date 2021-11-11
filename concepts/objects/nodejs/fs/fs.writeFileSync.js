const data = {
  a: 1,
  b: 2,
};
const dataJSON = JSON.stringify(notes);
fs.writeFileSync("notes.json", dataJSON);
