const express = require("express");
// const pool = require("./modules/pool");
const app = express();
const PORT = 5000;

app.use(express.json());

app.use(express.static("server/public"));

app.listen(PORT, () => {
    console.log("listening on port", PORT);
  });