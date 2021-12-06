const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io")(server);
const path = require("path");

const port = process.env.PORT || 1994;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.use(express.static(path.join(__dirname, "public")));

io.on("connection", (socket) => {
    console.log("Socket connected");

    socket.on("disconnect", () => {
        console.log("Socket disconnected");
    });
});

server.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});
