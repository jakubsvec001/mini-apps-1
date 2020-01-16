DROP DATABASE purchase_app;
CREATE DATABASE purchase_app;
use purchase_app;
DROP TABLE IF EXISTS purchases;
CREATE TABLE purchases(
  id INT PRIMARY KEY AUTO_INCREMENT,
  firstName TINYTEXT,
  lastName TINYTEXT,
  email TINYTEXT,
  password TINYTEXT,
  lineOne TINYTEXT,
  lineTwo TINYTEXT,
  city TINYTEXT,
  state TINYTEXT,
  zip TINYTEXT,
  phone TINYTEXT,
  ccNumber TINYTEXT,
  expiration TINYTEXT,
  cvvNumber TINYTEXT,
  billZip TINYTEXT
);

