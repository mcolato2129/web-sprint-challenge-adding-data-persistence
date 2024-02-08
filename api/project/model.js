const db = require('../../data/dbConfig')

function getProjects() {
    return db('projects')
}

function add(project_name) {
       return db('projects').insert(project_name)
       .then(([project_name])=> {
        return db('projects').where('project_name', project_name).first()
       })
}

module.exports = {
    getProjects,
    add,
}
