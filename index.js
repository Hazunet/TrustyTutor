const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const {Server} = require("socket.io");
const io = new Server(server);
const path = require("path");
app.use(express.static(__dirname + '/'));


io.on("connection",socket=>{
    console.log("connected");
    socket.on("sendMessage",message=>{
        socket.broadcast.emit("newMessage",message);
    });
});

server.listen(5000);
