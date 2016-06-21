'use strict';

const koa = require('koa')
const _ = require('koa-route')
const views = require('co-views')
const app = koa()
const serve = require('koa-static')

let render = views(__dirname + '/views', { ext: 'ect' })
let port = 8888
let title = 'OthloTech'


// serve files in public folder (css, js etc)
app.use(serve(__dirname + '/dist'));

app.use(_.get('/', function *() {
  this.body = yield render('main', {
    title: title
  })
}));

app.use(_.get('/about', function *() {
  this.body = yield render('about', {
    title: title
  })
}));
  
// dist以下のCSS, JSは静的ファイルとして提供
//app.use(require('koa-static-server')({rootDir: 'css', rootPath: '/dist/css'}));
//app.use(require('koa-static-server')({rootDir: 'js', rootPath: '/dist/js'}));
//app.use(require('koa-static-server')({rootDir: 'image', rootPath: '/dist/image'}));


// all other routes
app.use(function *() {
  this.body = yield render('main')
});

// サーバー起動
app.listen(port, function() {
  console.log('Server listening at port %d', port);
});