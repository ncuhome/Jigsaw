const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

const server = require('http').Server(app)
    .listen(8081, () => { console.log('open server!') });

const io = require('socket.io')(server);

const sortMock = {
    data: {
        rank: [
            {
                roomName: "白给小队",
                roomId: 123123,
                members: [
                    {
                        username: "孙翔宇",
                        userId: 5504118087
                    },
                    {
                        username: "赵子琦",
                        userId: 12341
                    },
                    {
                        username: "胡昊江",
                        userId: 123
                    }
                ],
                score: 74
            },
            {
                roomName: "我是弟弟",
                roomId: 23333,
                members: [
                    {
                        username: "张纪元",
                        userId: 123554332
                    },
                    {
                        username: "我是弟弟",
                        userId: 1234
                    },
                    {
                        username: "胡昊江",
                        userId: 123
                    },
                    {
                        username: "田弟弟",
                        userId: 4321123
                    }
                ],
                score: 73
            },
            {
                roomName: "我是哥哥",
                roomId: 46633,
                members: [
                    {
                        username: "社会人",
                        userId: 12332
                    },
                    {
                        username: "赵子琦",
                        userId: 1234123
                    },
                    {
                        username: "胡昊江",
                        userId: 123
                    },
                    {
                        username: "赵弟弟",
                        userId: 123123
                    },
                    {
                        username: "胡弟弟",
                        userId: 1235555
                    }
                ],
                score: 76
            },
            {
                roomName: "我是",
                roomId: 4663311,
                members: [
                    {
                        username: "社会人",
                        userId: 12332
                    },
                    {
                        username: "赵子琦",
                        userId: 1234123
                    },
                    {
                        username: "胡昊江",
                        userId: 123
                    },
                    {
                        username: "赵弟弟",
                        userId: 123123
                    },
                    {
                        username: "胡弟弟",
                        userId: 1235555
                    }
                ],
                score: 76
            },
            {
                roomName: "这就是你分手的借口",
                roomId: 1145144,
                members: [
                    {
                        username: "社会人",
                        userId: 12332
                    },
                    {
                        username: "赵子琦",
                        userId: 1234123
                    },
                    {
                        username: "胡昊江",
                        userId: 123
                    },
                    {
                        username: "赵弟弟",
                        userId: 123123
                    },
                    {
                        username: "胡弟弟",
                        userId: 1235555
                    }
                ],
                score: 69
            },
            {
                roomName: "如果能够重新来过",
                roomId: 1145100000,
                members: [
                    {
                        username: "社会人",
                        userId: 12332
                    },
                    {
                        username: "赵子琦",
                        userId: 1234123
                    },
                    {
                        username: "胡昊江",
                        userId: 123
                    },
                    {
                        username: "赵弟弟",
                        userId: 123123
                    },
                    {
                        username: "胡弟弟",
                        userId: 1235555
                    }
                ],
                score: 64
            },
        ],
    },
    status: 1
};

const tokenReturn = {
    status: 1,
    message: 'test'
};

io.on('connection', socket => {
    console.log('success connect!');

    socket.on('sendChange', message => {
        socket.broadcast.emit('sendChange', message)
    });

    socket.on('token', data => {
        // data : {userId,userName,identity,roomName}
        socket.emit('token', tokenReturn)
    });

    socket.on('cal', data => {
        // data : {userId,userName,identity,roomName}
        socket.emit('cal', '{"data":77}')
    });

    socket.emit('rank', sortMock);
});
