const socketio = require("socket.io")
const express = require("express")
const app = express()
const http = require("http")

const PORT = process.env.PORT || 2022

const server = http.createServer(app)

const io = socketio(server, {
    cors : {
        origin: "*",
        methods :["GET","POST","OPTIONS"]
    }
})

server.listen(PORT,()=>{
    
    io.on("connection",socket => {
        console.log(socket.id)
        console.log("ouy he")
        //socket.join("selam")
        //Karşılama mesajı
        //io.in(roomID).emit()
        socket.emit("WELCOME_MESSAGE",`o ${socket.id} naber ben ii`)
        socket.on("NEW_BOOKMARK_EVENT",(bookmark)=>{
            console.log("new bookmark geldi",bookmark)
            // gönderen hariç, çünkü gönderen kişi zaten veriyi dbden çekiyor 
            socket.broadcast.emit("NEW_BOOKMARK_ADDED",bookmark)
        })
    })
})