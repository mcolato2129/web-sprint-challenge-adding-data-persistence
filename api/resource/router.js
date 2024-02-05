const router = require('express').Router();

router.use('/', (req, res) => {
    res.json('Hello From the resource router!');
})

module.exports = router;
