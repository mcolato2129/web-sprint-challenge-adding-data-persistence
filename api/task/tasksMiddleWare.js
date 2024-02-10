const addTasks = (req, res, next) => {
    const task = req.body;
    if(
       task.task_description === undefined ||
       typeof task.task_description !== 'string' ||
       !task.task_description.trim()
    ){
        next({ status: 400, message: 'invalid task_description' })
    }
    else {
        next()
    }
}

module.exports = { addTasks };