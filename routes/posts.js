"use strict";

const Router = require('koa-router')
const path = require('path')
const ect = require('ect')

const route = (app) => {
  const renderer = ect({ root: path.resolve(__dirname, '../views'), ext: '.ect' });
  const postsRoute = new Router({
    prefix: '/posts'
  })

  let data = {
    posts: 'current'
  }

  postsRoute
    .get('/', function* (next) {
      this.body = renderer.render('posts/index', data);
    })
    .get('/:id', function* (next, id) {
      this.body = renderer.render('posts/show', data);
    })

  app
    .use(postsRoute.routes())
    .use(postsRoute.allowedMethods()) 
}

module.exports = route
