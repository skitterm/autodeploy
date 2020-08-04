const express = require("express");
const app = express();

app.get("/", (request, response) => {
  response.send("HI THERE!");
});

app.listen(3000, () => {
  console.log("app is listening on port 3000");
});
