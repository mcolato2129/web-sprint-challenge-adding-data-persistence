const db = require('../../data/dbConfig')

function getTasks() {
    //     SELECT 
    //     tk.task_id, 
    //     tk.task_description, 
    //     tk.task_notes, 
    //     tk.task_completed, 
    //     proj.project_name,
    //     proj.project_description
    // FROM tasks as tsk
    // JOIN projects  as proj
    // ON tsk.task_id = pj.project_id;
    return db('tasks as tk')
        .leftJoin('projects as proj', 'tk.project_id', '=', 'proj.project_id')
        .select(
            'tk.task_description',
            'tk.task_notes',
            'tk.task_completed',
            'proj.project_name',
            'proj.project_description'
        )
}

function add(task) {
    return db('tasks').insert(task)
    .then(([task_id]) => {
        return db('tasks').where('task_id', task_id).first()
    })

}

module.exports = {
    getTasks,
    add,
}