import io from 'socket.io-client'
const socket = io('https://jigsaw.mehacker.cn/');

/*验证token*/
export const listenToken = method => socket.on('token', method);
export const sendToken = data => socket.emit('token', data);

/*创建/加入房间*/
export const listenJoin =  method => socket.on('join', method);
export const joinRoom = data => socket.emit('roomJoin', data);

/*加入房间广播*/
export const listenAddBroadcast =  method => socket.on('broadcastRoomJoin', method);

/*离开房间*/
export const listenLeave =  method => socket.on('leave', method);
export const leaveRoom = data => socket.emit('roomLeave', data);

/*离开房间广播*/
export const listenLeaveBroadcast =  method => socket.on('broadcastRoomLeave', method);

/*开始游戏*/
export const listenStart =  method => socket.on('broadcastGameStart', method);
export const gameStart = data => socket.emit('gameStart', data);

/*移动切片*/ /*待改*/
export const listenList = method => socket.on('broadcastMove', method);
export const sendListChange = data => socket.emit('gameMove', data);

/*计算分数*/
export const listenCal =  method => socket.on('broadcastScore', method);
export const sendCal = data => socket.emit('gameCal', data);

/*获取排名*/
export const listenRank = method => socket.on('rank', method);
export const getRank = data => socket.emit('rankList', data);

/*删除监听*/
export const removeSocket = (event) => socket.removeAllListeners(event);