import io from 'socket.io-client'
const common = io('http://jigsaw.mehacker.cn/');
const room = io('http://jigsaw.mehacker.cn/room/');
const game = io('http://jigsaw.mehacker.cn/game/');

/*验证token*/
export const listenToken = method => common.on('token', method);
export const sendToken = data => common.emit('token', data);

/*获取房间列表*/
export const listenRoomList = method => common.on('get', method);

/*创建/加入房间*/
export const listenJoin =  method => common.on('join', method);
export const joinRoom = data => common.emit('roomJoin', data);

/*加入房间广播*/
export const listenBroadcast =  method => common.on('broadcast', method);

/*离开房间*/
export const listenLeave =  method => common.on('leave', method);
export const leaveRoom = data => common.emit('roomLeave', data);

/*开始游戏*/
export const listenStart =  method => game.on('start', method);
export const gameStart = data => common.emit('gameStart', data);

/*移动切片*/ /*待改*/
export const listenList = method => game.on('move', method);
export const sendListChange = data => game.emit('move', data);

/*计算分数*/
export const listenCal =  method => game.on('cal', method);
export const sendCal = data => game.emit('cal', data);

/*获取排名*/
export const listenRank = method => game.on('rank', method);
export const getRank = method => game.on('rankList', method);

/*删除监听*/
export const removeListenCommon = (event) => common.removeAllListeners(event);
export const removeListenRoom = (event) => room.removeAllListeners(event);
export const removeListenGame = (event) => game.removeAllListeners(event);