const express = require("express");
const path = require("path");

const app = express();

app.use(express.json()); // enables json to be received
app.use(express.static(__dirname + "/public/dist/public"));

require("./server/config/mongoose");
require("./server/config/routes")(app);
app.all("*", (request, response) => {
  response.sendFile(path.join(__dirname, "/public/dist/public/index.html"));
});

app.listen(3000, "localhost", _ => console.log("listening on port 3000"));
