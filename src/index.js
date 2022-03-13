const port = 8080;
const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(require("./endpoints"));

app.listen(port, function () {
  console.log(`running on port ${port}`);
});
