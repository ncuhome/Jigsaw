const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1');
  if(req.method === "OPTIONS") res.send(200);/*让options请求快速返回*/
  else next();
});

const server = require('http').Server(app)
  .listen(8081, () => {
    console.log('open server!')
  });

const io = require('socket.io')(server);

const data = {
  jigsawList: [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ],
  current: 1,
  score: 0,
  members: [
    {
      username: '',
      id: 1,
      pics: [1, 5, 6]
    },
    {
      username: '',
      id: 2,
      pics: [2, 3, 8]
    },
    {
      username: '',
      id: 3,
      pics: [4, 7, 9]
    }
  ]
};

io.on('connection', socket => {
  console.log('success connect!');

  socket.on('login', res => {
      data.members[data.current - 1].username = JSON.parse(res).username;
      const req = {
        data: {
          username: data.members[data.current - 1].username,
          pics: data.members[data.current - 1].pics,
          id: data.current,
          jigsawList: data.jigsawList
        },
        status: 1
      };

      if (data.current <= 3) {
        data.current++;
        socket.emit('login', req)
      } else {
        data.current = 1;
      }
  });

  socket.on('change', res => {
    data.jigsawList = JSON.parse(res).jigsawList;
    socket.broadcast.emit('change', res)
  });

  socket.on('admin', () => {
    socket.emit('admin', JSON.data)
  });
});
