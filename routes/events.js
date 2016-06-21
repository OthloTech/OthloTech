"use strict";

const Router = require('koa-router')
const path = require('path')
const ect = require('ect')

const route = (app) => {
  const renderer = ect({ root: path.resolve(__dirname, '../views/'), ext: '.ect' });
  const eventsRoute = new Router({
    prefix: '/events'
  })

  let data = {
    events: 'current'
  }

  eventsRoute
    .get('/', function* (next) {
      this.body = renderer.render('events/index', data);
    })
    .get('/:id', function* (next, id) {
      this.body = renderer.render('events/show', data);
    })

  app
    .use(eventsRoute.routes())
    .use(eventsRoute.allowedMethods()) 
}

module.exports = route
