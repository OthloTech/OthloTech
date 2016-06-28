"use strict";

const Router = require('koa-router')
const path = require('path')
const ect = require('ect')

const route = (app) => {
  const renderer = ect({ root: path.resolve(__dirname, '../views/'), ext: '.ect' });
  const eventsRoute = new Router({
    prefix: '/events'
  })

  let opts = {
    events: 'current'
  }

  eventsRoute
    .get('/', function* (next) {
      this.body = renderer.render('events/index', opts);
    })
    .get('/:date', function* (next, id) {
      const data = Object.assign(opts, {hero: `/images/events/${this.params.date}/top.jpg`})
      this.body = renderer.render(`events/${this.params.date}`, data);
    })

  app
    .use(eventsRoute.routes())
    .use(eventsRoute.allowedMethods()) 
}

module.exports = route
