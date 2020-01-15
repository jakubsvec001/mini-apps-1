const express = require("express");
const bodyParser= require("body-parser");
const path = require("path");
const fs = require("fs");

const PORT = 3000;

const app = express();


app.use(express.static(path.resolve(__dirname, "../client/dist")));
app.use(bodyParser)



app.listen(PORT, () => console.log(`Listening on port ${3000}`))


