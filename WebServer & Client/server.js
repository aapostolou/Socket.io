const express = require("express");
const app = express();
const server = require("http").createServer(app);

const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
  console.log("Socket connected");

  socket.on("disconnect", () => {
    console.log("Socket disconnected");
  });
});

server.listen(port, () => {
  console.log(`Server listening on port: ${port}`);
});
