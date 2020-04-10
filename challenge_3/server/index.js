const path = require("path");
const fs = require("fs");
const express = require("express");
const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const gameScore = new Schema({
  gameId: ObjectId,
  players: Array,
  winner: String
});

// console.log(conn)

var mongoDB = 'mongodb://127.0.0.1/my_database'

mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Mongo Connection Error:'))


const GamesModel = mongoose.model('GamesModel')

const doc = new GamesModel()

doc.players = ['jake', 'tantri']
doc.winner = 'tantri'

// console.log(doc)

doc.save()

console.log('getting all')

// GamesModel.find({}, (err, all) => {
//   console.log(all)
// })

GamesModel.find().then(data => console.log(data)).catch(err => console.log(err))
 
const PUBLIC = path.resolve(__dirname, "..", "client", "dist");
const PORT = 3000;

// console.log(PUBLIC);

const app = express();

app.use(express.static(PUBLIC));

app.listen(PORT, () => console.log(`LISTENING PORT ${PORT}`));
