const connection = require("../model/db");

const convertJsonAndStore = data => {
  const query = `INSERT INTO purchases (
    firstName, lastName, email, password, lineOne, lineTwo, city, state, zip, phone, ccNumber, expiration, cvvNumber, billZip) VALUES ( 
      "${data.firstName}", "${data.lastName}", "${data.email}", "${data.password}", "${data.line1}", "${data.line2}", "${data.city}", "${data.state}", "${data.zip}", "${data.phone}", "${data.ccNumber}", "${data.expiration}", "${data.cvvNumber}", "${data.billZip}")`;
  console.log("Inserting Into Database");
  return callback => {
    connection.query(query, (err, results, fields) => {
      if (err) {
        callback(err);
      } else {
        callback(null, results, fields)
      }
    });
  };
};

module.exports = convertJsonAndStore;
