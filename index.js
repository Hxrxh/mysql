const express = require("express");
const app = express();
const mySql = require("mysql2");

const connection = mySql.createConnection({
  host: "localhost",
  user: "root",
  password: "lenovog5012345",
  database: "testdb",
});

connection.connect((err) => {
  if (err) {
    console.log(err);

    return;
  }

  console.log("connection  has beenn created.");
});
const connectionQuery = `create table Students(
  id int AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(20),
  email VARCHAR(20))`;
connection.execute(connectionQuery, (err) => {
  if (err) {
    console.log(err);
    connection.end();
    return;
  }
  console.log("table has been created.");
});
app.get("/", (req, res) => {
  res.send("hello world");
});

app.listen(3000, () => {
  console.log("Server running");
});
