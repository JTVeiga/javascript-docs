const dataBuffer = fs.readFileSync("notes.json");
const dataJSON = dataBuffer.toString();
JSON.parse(dataJSON);
