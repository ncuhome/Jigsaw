import webSocket from 'socket.io-client'
const ws = webSocket('localhost:8089');

export const listenToken = method => ws.on('token', method);
export const sendToken = data => ws.emit('token', data);

export const listenList = method => ws.on('sendChange', method);
export const sendListChange = data => ws.emit('sendChange', data);
