const express = require("express");
const path = require("path");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname);
//app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, "..")));

app.get("/", (req, res) => {
  const podaci = {};
  res.render("index", podaci);
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.listen(PORT, () => {
  console.log(`Server je pokrenut na http://localhost:${PORT}`);
});
