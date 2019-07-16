const express = require('express')
const app = express()

const server = require('http').Server(app)
    .listen(8081,()=>{console.log('open server!')})

const io = require('socket.io')(server)

io.on('connection', socket => {
    console.log('success connect!')

    socket.on('sendChange', message => {
        socket.broadcast.emit('sendChange', message)
    })
})
