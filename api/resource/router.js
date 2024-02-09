const router = require('express').Router();
const Resources = require('./model')
const { addResoruce } = require('./resourceMiddleWare')

router.get('/', (req, res, next) => {
    Resources.getResources()
    .then(resources => {
        res.json(resources)
    })
    .catch(next)
})

router.post('/', addResoruce, (req, res, next) => {
    const resource = req.body
    Resources.add(resource)
    .then(resource => {
        res.status(201).json(resource)
    })
    .catch(next)
})


router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      customMessage: 'error occured in the resources router',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router;
