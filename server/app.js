import express from "express";
const app = express();
const API_PORT = 8080;
app.use(express.json());
import cors from "cors";
app.use(cors());

import userapi from "./userapi.js";
app.use(userapi);


import http from "http";
const httpServer = http.createServer(app);
import { Server } from "socket.io";
const IO_PORT = 8081;
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["*"]
    }
});

io.on("connection", (socket) => {
    console.log("Client connected in app009", socket.id)
    socket.on("event", (data) => {
        console.log("console log from io.on connection in app.js 009", data);
        io.emit("ready", { data: "this is json int it?"});
    });

    socket.on("ready", (data) => {
        console.log("some data from io on ready in 009 app", data)
    });
    
});

httpServer.listen(IO_PORT, () =>  {console.log("App009 io server listening on port:", IO_PORT)});

app.listen(API_PORT, () => {
    console.log("API REST Server 009 online at", API_PORT);
});

