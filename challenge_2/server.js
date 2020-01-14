const express = require("express");
const bodyParser = require("body-parser");
const convertJsonToCsv = require("./lib.js").convertJsonToCsv
const urlEncoded = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();
const app = express();
const PORT = 3000;

console.log()
// app.use(urlEncoded);

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/api/json", jsonParser, (req, res) => {
  const csv = convertJsonToCsv(req.body);
  console.log(csv)
  res.sendStatus(201);
});

app.listen(PORT, () => console.log(`CSV app listening on port ${PORT}.`));
