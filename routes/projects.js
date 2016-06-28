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
      const date = this.params.date
      const result = date.match(/(\d+)-(\d+)-(\d+)/)
      const dateString = `${result[1]}年${result[2]}月${result[3]}日`
      const data = Object.assign(opts, {hero: `/images/projects/${date}/top.jpg`, date: dateString})
      this.body = renderer.render(`projects/${date}`, data);
    })

  app
    .use(projectsRoute.routes())
    .use(projectsRoute.allowedMethods()) 
}

module.exports = route
