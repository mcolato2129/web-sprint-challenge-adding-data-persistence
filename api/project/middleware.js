const addProject = (req, res, next) => {
    const project  = req.body;
    if(
        project.project_name === undefined || 
        typeof project.project_name !== 'string' || 
        !project.project_name.trim()
    ){
        next({ status: 400, message: 'invalid project_name' })
    } else {
        next()
    }
}

module.exports = { addProject };