"use strict";

const Router = require('koa-router')
const path = require('path')
const ect = require('ect')

const route = (app) => {
  const renderer = ect({ root: path.resolve(__dirname, '../views'), ext: '.ect' })
  const topRoute = new Router()

  topRoute
    .get('/', function* (next) {
      const data = {
      	title: 'OthloTech -学生クリエイティブ集団-',
        home: 'current'
      }
      this.body = renderer.render('main', data);
    })
    .get('/about', function* (next) {
      const data = {
        title: 'OthloTechとは / OthloTech',
        about: 'current'
      }
      this.body = renderer.render('about', data);
    })

  app
    .use(topRoute.routes())
    .use(topRoute.allowedMethods()) 
}

module.exports = route
