const app = require('express')()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', function(socket) {
    console.log('a user connected')
    socket.on('chat message', function(msg) {
        console.log('message ' + msg)
        io.emit('chat message', msg)
    })
})


http.listen(3001, function() {
    console.log('listening on port 3001')
})