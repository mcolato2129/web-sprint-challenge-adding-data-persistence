const express = require('express')
const router = express.Router();
const Projects = require('./model')
const { addProject } = require('./middleware')


router.get('/', (req, res, next) => {
    Projects.getProjects()
    .then(projects => {
        res.json(projects)
    })
    .catch(next)
})

router.post('/', addProject, (req, res, next) => {
    const project_name = req.body
    Projects.add(project_name)
    .then(project_name => {
        res.status(201).json(project_name)
      })
      .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      customMessage: 'error occured in the projects router',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router;