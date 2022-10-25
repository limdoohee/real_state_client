const express = require("express");
const app = express();
const test = require("./Router/test");

app.use("/test", test);

const port = 5000;
app.listen(port, () => console.log(`${port}`));

// get the client
const mysql = require("mysql2");

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234", // 비번
  database: "project",
});

// simple query
connection.query("SELECT * FROM member", function (err, results, fields) {
  console.log(results); // results contains rows returned by server
  //   console.log(fields); // fields contains extra meta data about results, if available
});
