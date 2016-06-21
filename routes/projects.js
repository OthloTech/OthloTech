"use strict";

const Router = require('koa-router')
const path = require('path')
const ect = require('ect')

const route = (app) => {
  const renderer = ect({ root: path.resolve(__dirname, '../views'), ext: '.ect' })
  const projectsRoute = new Router({
    prefix: '/projects'
  })

  let data = {
    projects: 'current'
  }

  projectsRoute
    .get('/', function* (next) {
      this.body = renderer.render('projects/index', data);
    })
    .get('/:id', function* (next, id) {
      this.body = renderer.render('projects/show', data);
    })

  app
    .use(projectsRoute.routes())
    .use(projectsRoute.allowedMethods()) 
}

module.exports = route
