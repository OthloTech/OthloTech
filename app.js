'use strict';

const koa = require('koa')
const _ = require('koa-route')
const views = require('co-views')
const app = koa()

let render = views(__dirname + '/views', { ext: 'ect' })
let port = 8888
let title = 'OthloTech'

app.use(_.get('/', function *() {
  this.body = yield render('index', {
    title: title
  })
}));
  
// dist以下のCSS, JSは静的ファイルとして提供
app.use(require('koa-static-server')({rootDir: 'dist', rootPath: '/dist'}));

// all other routes
app.use(function *() {
  this.body = yield render('index')
});

// サーバー起動
app.listen(port, function() {
  console.log('Server listening at port %d', port);
});