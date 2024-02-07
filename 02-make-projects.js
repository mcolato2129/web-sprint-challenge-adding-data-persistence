// const project = [
//     { project_name: 'foo', project_description: '', project_completed: false },
//     { project_name: 'bar', project_description: 'just testing it out', project_completed: true },
// ]


exports.seeds = function(knex) {
    return knex('project').insert([
        { project_name: 'foo', project_description: '', project_completed: false },
        { project_name: 'bar', project_description: 'just testing it out', project_completed: true },
    ])
}