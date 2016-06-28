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
      const date = this.params.date
      const result = date.match(/(\d+)-(\d+)-(\d+)/)
      const dateString = `${result[1]}年${result[2]}月${result[3]}日`
      const image = function(file) {
        return `<img src="/images/posts/${date}/${file}">`
      }
      const data = Object.assign(opts, {hero: `/images/posts/${date}/top.jpg`, date: dateString, image: image})
      this.body = renderer.render(`posts/${date}`, data);
    })

  app
    .use(postsRoute.routes())
    .use(postsRoute.allowedMethods()) 
}

module.exports = route
