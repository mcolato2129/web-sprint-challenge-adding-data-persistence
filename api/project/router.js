const router = require('express').Router();
const Projects = require('./model')


router.get('/', (req, res, next) => {
    Projects.getProjects()
    .then(projects => {
        res.json(projects)
    })
    .catch(next)
})

router.use('/', (req, res) => {
    res.json('Hello From the projects router!');
})

module.exports = router;