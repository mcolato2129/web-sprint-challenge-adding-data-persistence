const router = require('express').Router();

router.use('/', (req, res) => {
    res.json('Hello From the tasks router!');
})

module.exports = router;
