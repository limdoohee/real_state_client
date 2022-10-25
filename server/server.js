const express = require("express");
const app = express();
const api = require("./Router/test");

app.use("/api", api);

const port = 5000;
app.listen(port, () => console.log(`${port}`));
