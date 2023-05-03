const express = require("express");
const app = express();

app.listen(3001);

app.get("/", (req, res) => {
  console.log("Hello");
  res.json({ message: "Hello World" });
});
