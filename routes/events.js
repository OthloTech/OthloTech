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
      const date = this.params.date
      const result = date.match(/(\d+)-(\d+)-(\d+)/)
      const dateString = `${result[1]}年${result[2]}月${result[3]}日`
      const image = function(file) {
        return `<img src="/images/events/${date}/${file}">`
      }
      const data = Object.assign(opts, {hero: `/images/events/${date}/top.jpg`, date: dateString, image: image})
      this.body = renderer.render(`events/${date}`, data);
    })

  app
    .use(eventsRoute.routes())
    .use(eventsRoute.allowedMethods()) 
}

module.exports = route
