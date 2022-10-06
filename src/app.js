const express = require("express");
const path = require("path");
require("./db/conn");
const app = express();
const port = process.env.port || 3000;
const hbs = require("hbs");

// setting path
const staticpath = path.join(__dirname, "../public");
const templatespath = path.join(__dirname, "../templates/views");
const partialspath = path.join(__dirname, "../templates/partials");

// middleware

app.use(
  "/css",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "../node_modules/bootstrap/dist/js"))
);
app.use("/jq", express.static(path.join(__dirname, "../node_modules/jquery")));
app.use(express.static(staticpath));

app.set("view engine", "hbs");
app.set("views", templatespath);

hbs.registerPartials(partialspath);

//routing
app.get("/", (req, res) => {
  res.render("index");
});

// server create
app.listen(port, () => {
  console.log(`Server is running on Port ${port}`);
});
