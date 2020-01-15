const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const convertJsonToCsv = require("./lib.js").convertJsonToCsv;

const urlEncoded = bodyParser.urlencoded({ extended: false });
const jsonParser = bodyParser.json();
const app = express();
const PORT = 3000;


app.use(express.static(path.dirname(__dirname) + '/client'))

app.post("/api/csvToJson", jsonParser, (req, res) => {
  console.log(req.body)
  const package = req.body["package"];
  const filterObj = req.body["filterObj"];
  const csv = convertJsonToCsv(package, filterObj);
  res.send(csv);
});

app.listen(PORT, () => console.log(`CSV app listening on port ${PORT}.`));
