import webSocket from 'socket.io-client'
const ws = webSocket('http://localhost:8081')

const listenList = method => ws.on('sendChange', method)
const sendListChange = data => ws.emit('sendChange', data)

export {sendListChange, listenList}
