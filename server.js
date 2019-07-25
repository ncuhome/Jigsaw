const express = require('express')
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    next();
});

app.post('/api/user/login', function (req, res) {
    const data = req.body;
    const userId = data.userId;
    const password = data.password;
    switch (true) {
        case (userId === "321" && password === "321"):
            res.json({
                token: '123123',
                username: "蔡徐坤",
                message: "登录成功"
            })
            break;
        case (userId === "4321" && password === "4321"):
            res.json({
                token: '1111111',
                username: "赵子琦",
                message: "登录成功"
            })
            break;
        default:
            res.json({
                token: '',
                username: '',
                message: "用户名不存在或密码错误"
            })
    }
});

app.post('/api/room/new', function (req, res) {
    const data = req.body;
    const groupName = data.groupName;
    switch (true) {
        case (groupName === "321"):
            res.json({
                message: "队伍名已存在",
                status: 0
            })
            break;
        default:
            res.json({
                message: "",
                status: 1
            })
    }
});

app.post('/api/room/select', function (req, res) {
    const data = req.body;
    const groupName = data.groupName;
    const difficult = data.difficult;
    switch (true) {
        case (groupName === "321"):
            res.json({
                message: "队伍名已存在",
                status: 0
            })
            break;
        default:
            res.json({
                message: "",
                status: 1
            })
    }
});


const server = require('http').Server(app)
    .listen(8081, () => { console.log('open server!') })

const io = require('socket.io')(server)

io.on('connection', socket => {
    console.log('success connect!')

    socket.on('sendChange', message => {
        socket.broadcast.emit('sendChange', message)
    })
})
