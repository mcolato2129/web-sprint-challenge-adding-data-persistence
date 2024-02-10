const router = require('express').Router();
const Tasks = require('./model')
const { addTasks } = require('./tasksMiddleWare')

router.get('/', (req, res, next) => {
    Tasks.getTasks()
    .then(tasks => {
        tasks.forEach((task) => {
            if(task.task_completed === 0){
                task.task_completed = false;
            }
            if(task.task_completed === 1){
                task.task_completed = true;
            }
        })
       res.json(tasks)
    })
    .catch(next)
})

router.post('/', addTasks, (req, res, next) => {
    const task = req.body;
    Tasks.add(task)
    .then(task => {
        if(task.task_completed === 0){
            task.task_completed = false;
        }
        if(task.task_completed === 1){
            task.task_completed = true;
        }
        res.status(201).json(task)
    })
    .catch(next)
})

router.use((err, req, res, next) => { // eslint-disable-line
    res.status(err.status || 500).json({
      customMessage: 'error occured in the projects router',
      message: err.message,
      stack: err.stack,
    })
  })

module.exports = router;
