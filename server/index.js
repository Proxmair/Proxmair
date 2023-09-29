const http = require('http');
const { Server } = require('socket.io');
const cors=require('cors');
const express=require('express')
const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
const server = http.createServer(app);
const io = new Server(server,{
    cors:{
        origin:"http://localhost:3000",
        methods:["GET","POST"]
    }
});
const onlineUsers=[];
io.on('connection', (socket) => {
    socket.on('user-online',(userId)=>{
        onlineUsers.push({userId:userId,socketId:socket.id});
        io.emit('message', `${userId} is online`);
    })
    socket.on('message',(data)=>{
        io.emit('message', `${data}`);
    })

    socket.on('disconnect', () => {
        console.log(`Socket ${socket.id} disconnected.`);
        let userId;
        console.log(onlineUsers);
        for (const user of onlineUsers) {
            if (user.socketId === socket.id) {
              break; // Exit the loop when a match is found
            }
        }
        if(userId){
            io.emit('message', `${userId} is offline`);
        }
    });
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
