const express = require("express");
const router = express();
const mysql = require("mysql2");
const cookie = require("cookie");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "project",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

router.get("/userList", (req, res) => {
  pool.query("SELECT * FROM member", function (err, rows, fields) {
    // Connection is automatically released when query resolves
    err ? console.log(err) : console.log(rows);
    res.send(rows);
  });
});

router.get("/user", (req, res) => {
  const params = req.query.id;
  pool.query(
    "SELECT * FROM `member` Where `ID` = ?",
    params,
    function (err, rows, fields) {
      // Connection is automatically released when query resolves
      err ? console.log(err) : console.log(rows);
      res.send(rows);
    }
  );
});

router.post("/login", (req, res) => {
  let isUser = false;
  const { userId, userPassword } = req.body;
  // const cookies = cookie.parse(req.header.cookie);

  pool.query(
    "SELECT * FROM `member` Where `ID` = ?",
    req.body.id,
    function (err, rows, fields) {
      if (err) {
        console.log(err);
      } else {
        if (rows.ID === userId && rows.Password === userPassword) {
          isUser = true;
        } else {
          return;
        }

        if (isUser) {
          const YOUR_SECRET_KEY = "abcd";
          const accessToken = jwt.sign(
            {
              userId,
            },
            YOUR_SECRET_KEY,
            {
              expiresIn: "10m",
            }
          );
          res.cookie("user", accessToken);
          res.status(201).json({
            result: "ok",
            accessToken,
          });
          res.send(rows);
        } else {
          res.status(400).json({ error: "invalid user" });
        }
      }
    }
  );
});

module.exports = router;
