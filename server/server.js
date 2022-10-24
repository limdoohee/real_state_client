const express = require("express");
const app = express();
const test = require("./Router/test");

app.use("/test", test);

const port = 5000;
app.listen(port, () => console.log(`${port}`));
