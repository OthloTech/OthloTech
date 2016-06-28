"use strict";

const Router = require('koa-router')
const path = require('path')
const ect = require('ect')

const route = (app) => {
  const renderer = ect({ root: path.resolve(__dirname, '../views'), ext: '.ect' })
  const projectsRoute = new Router({
    prefix: '/projects'
  })

  let opts = {
    projects: 'current'
  }

  projectsRoute
    .get('/', function* (next) {
      this.body = renderer.render('projects/index', opts);
    })
    .get('/:date', function* (next, id) {
      const data = Object.assign(opts, {hero: `/images/projects/${this.params.date}/top.jpg`})
      this.body = renderer.render(`projects/${this.params.date}`, data);
    })

  app
    .use(projectsRoute.routes())
    .use(projectsRoute.allowedMethods()) 
}

module.exports = route
