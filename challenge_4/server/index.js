const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");
const convertJsonAndStore = require("./controller/convertJsonAndStore");


const PORT = 3000;

const app = express();

app.use(express.static(path.resolve(__dirname, "../client/dist")));

app.post("/api/purchase", bodyParser.json(), (req, res) => {
  'converting... '
  const storagePromise = convertJsonAndStore(req.body)
  storagePromise((err, results) => {
    if (err) {
      console.log(err);
    } else {
      console.log('SUCCESS!!!!!', results)
      res.sendStatus(201);

    }
  })
});

app.listen(PORT, () => console.log(`Listening on port ${3000}`));
