const router = require('express').Router();
const Projects = require('./model')


router.get('/', (req, res, next) => {
    Projects.getProjects()
    .then(projects => {
        res.json(projects)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
    
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      customMessage: 'error occured in the projects router',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router;