const express = require('express');
const projectRouter = require('./project/router')

const server = express()

server.use(express.json());

server.use('/api/projects', projectRouter)

server.use('*', (req, res)=> {
    res.json('you hit me')
})

module.exports = server