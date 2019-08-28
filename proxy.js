const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Credentials", "include");
  next();
});

const { HOST = 'http://localhost:8000', PORT = '8089' } = process.env;
/*const { HOST = 'http://jigsaw.mehacker.cn', PORT = '8089' } = process.env;*/

app.set('port', PORT);

app.use(proxy('/', { target: HOST }));

app.listen(app.get('port'), () => {
  console.log(`server running @${app.get('port')}`);
});