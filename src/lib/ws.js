import io from 'socket.io-client'
/*const socket = io('localhost:5656');*/
const socket = io('localhost:8081');

/*验证token*/
export const listenToken = method => socket.on('token', method);
export const sendToken = data => socket.emit('token', data);

/*创建房间*/
export const listenNew = method => socket.on('new', method);
export const createNew = data => socket.emit('new', data);

/*加入房间*/
export const listenJoin =  method => socket.on('join', method);
export const joinRoom = data => socket.emit('join', data);

/*计算分数*/
export const listenCal =  method => socket.on('cal', method);
export const sendCal = data => socket.emit('cal', data);

/*获取排名*/
export const listenRank = method => socket.on('getRank', method);

/*移动切片*/ /*待改*/
export const listenList = method => socket.on('sendChange', method);
export const sendListChange = data => socket.emit('sendChange', data);