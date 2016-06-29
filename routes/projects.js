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
    .get('/:p_name', function* (next, id) {
      const p_name = this.params.p_name
      const data = Object.assign(opts, {hero: `/images/projects/${p_name}.png`})
      this.body = renderer.render(`projects/${p_name}`, data);
    })

  app
    .use(projectsRoute.routes())
    .use(projectsRoute.allowedMethods()) 
}

module.exports = route
