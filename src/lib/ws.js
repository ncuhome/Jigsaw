import io from 'socket.io-client'
const common = io('http://jigsaw.mehacker.cn/');
const game = io('http://jigsaw.mehacker.cn/game');
const room = io('http://jigsaw.mehacker.cn/room');
const test = io('http://localhost:8081/');

/*验证token*/
export const listenToken = method => test.on('token', method);
export const sendToken = data => test.emit('token', data);

/*获取房间列表*/
export const listenRoomList = method => common.on('get', method);

/*创建/加入房间*/
export const listenJoin =  method => room.on('join', method);
export const joinRoom = data => room.emit('join', data);

/*移动切片*/ /*待改*/
export const listenList = method => game.on('move', method);
export const sendListChange = data => game.emit('move', data);

/*计算分数*/
export const listenCal =  method => game.on('cal', method);
export const sendCal = data => game.emit('cal', data);

/*加入游戏*/
export const listenJoinGame =  method => game.on('join', method);
export const sendJpinGame = data => game.emit('join', data);

/*获取排名*/
export const listenRank = method => game.on('rank', method);

