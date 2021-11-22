const express = require("express");
const expressWs = require("express-ws");

const app = express();
expressWs(app);

// REST endpoint
app.get("/", function (req, res) {
  res.send("Hello World");
});

// Web socket endpoint (long-lived connection)
app.ws("/echo", (ws, req) => {
  ws.on("message", (msg) => {
    ws.send(msg);
  });
});

app.listen(3000);
