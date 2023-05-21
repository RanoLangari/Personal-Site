const express = require("express");

// const connection = db.createConnection({
//   host: "localhost",
//   user: "root",
//   database: "betaglowing",
// });

const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.get("/resume", (req, res) => {
  res.render("resume.ejs");
});

app.get("/projects", (req, res) => {
  res.render("projects.ejs");
});

app.get("/contact", (req, res) => {
  res.render("contact.ejs");
});

app.get("/experience", (req, res) => {
  res.render("experience.ejs");
});

app.listen(process.env.PORT || 80);
