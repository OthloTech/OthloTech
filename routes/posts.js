"use strict";

const Router = require('koa-router')
const path = require('path')
const ect = require('ect')

const route = (app) => {
  const renderer = ect({ root: path.resolve(__dirname, '../views'), ext: '.ect' });
  const postsRoute = new Router({
    prefix: '/posts'
  })

  let opts = {
    posts: 'current'
  }

  postsRoute
    .get('/', function* (next) {
      this.body = renderer.render('posts/index', opts);
    })
    .get('/:date', function* (next, id) {
      const data = Object.assign(opts, {hero: `/images/posts/${this.params.date}/top.jpg`})
      this.body = renderer.render(`posts/${this.params.date}`, data);
    })

  app
    .use(postsRoute.routes())
    .use(postsRoute.allowedMethods()) 
}

module.exports = route
