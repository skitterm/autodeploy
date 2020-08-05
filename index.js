const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("HI THERE!");
});

app.listen(80, () => {
  console.log("app is listening on port 3000");
});
