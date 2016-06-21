"use strict";

const path = require('path')
const serve = require('koa-static')

const route = (app) => {
  // ルート定義
  const eventsRoute = require('./events')(app)
  const postsRoute = require('./posts')(app)
  const projectsRoute = require('./projects')(app)
  const topRoute = require('./top')(app)
  
  // 静的配信 js, css
  app
    .use(serve(path.resolve(__dirname, '../dist')))
}

module.exports = route
