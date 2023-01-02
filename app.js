const express = require("express");
const path = require("path");
const app = express();

app.listen(3000, () => {
  console.log("prendió");
});
const publicpath = path.join(__dirname, "./public");
app.use(express.static(publicpath));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "views/home.html"));
});
app.get("/register", (req, res) => {
  res.sendFile(path.join(__dirname, "views/register.html"));
});
app.get("/login", (req, res) => {
  res.sendFile(path.join(__dirname, "views/login.html"));
});
