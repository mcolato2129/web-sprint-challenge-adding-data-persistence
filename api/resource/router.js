const router = require('express').Router();
const Resources = require('./model')


router.get('/', (req, res, next) => {
    Resources.getResources()
    .then(resources => {
        res.json(resources)
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
