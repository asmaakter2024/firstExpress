// console.log(" first express js. welcome everone");

const express = require("express");
const myMiddleware = require("./middlewares/myMiddleware.js");
const myController = require("./controllers/myController.js");
const app = express();

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello Developers");
});

app.post("/", myController);

app.listen("8000", () => {
  console.log("server is running");
});
