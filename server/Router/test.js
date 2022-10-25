const express = require("express");
const router = express();
const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "project",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

router.get("/test", (req, res) => {
  pool.query("SELECT * FROM member", function (err, rows, fields) {
    // Connection is automatically released when query resolves
    err ? console.log(err) : console.log(rows);
    res.send(rows);
  });
});

module.exports = router;
