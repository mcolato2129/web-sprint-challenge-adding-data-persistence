const express = require('express')
const router = express.Router();
const Projects = require('./model')
const { addProject } = require('./middleware')


router.get('/', (req, res, next) => {
    Projects.getProjects()
    .then(projects => {
        projects.forEach((project)=> {
            if(project.project_completed === 0){
                project.project_completed = false;
            }
            if(project.project_completed === 1){
                project.project_completed = true;
            }
            console.log(project.project_completed)
        })
        res.json(projects)
    })
    .catch(next)
})

router.post('/', addProject, (req, res, next) => {
    const project = req.body
    Projects.add(project)
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