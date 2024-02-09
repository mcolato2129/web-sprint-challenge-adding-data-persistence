const db = require('../../data/dbConfig')

function getProjects() {
    return db('projects')
    //I need to loop over my projects and change the value of my key project_completed to the boolesn of false. rn it is getting 0.
}

function add(project) {
       return db('projects').insert(project)
       .then(([project_id])=> {
        console.log(project)
        return db('projects').where('project_id', project_id).first()
       })
}

module.exports = {
    getProjects,
    add,
}
