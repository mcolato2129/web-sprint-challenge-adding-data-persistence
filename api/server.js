const express = require('express');


const server = express()

server.use(express.json());

server.use('*', (req, res)=> {
    res.json('you hit me')
})

module.exports = server