const router = require('express').Router();

router.use('/', (req, res) => {
    res.json('Hello From the projects router!');
})

module.exports = router;