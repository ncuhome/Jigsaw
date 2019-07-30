import webSocket from 'socket.io-client'
const ws = webSocket('http://localhost:8081')

export const listenList = method => ws.on('sendChange', method)
export const sendListChange = data => ws.emit('sendChange', data)

export const lisstenAddRoom = method => ws.on('addRoom', method)
export const addRoom = data => ws.emit('addRoom', data)
