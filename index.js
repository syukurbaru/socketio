const express = require('express');
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)
const port = process.env.PORT || 3000

app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {
    console.log(socket.id, 'Ini user id')
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg)
        io.emit('chat message', msg )
    })
})

http.listen(port, () => {
    console.log('Listen on port:' + port)
})