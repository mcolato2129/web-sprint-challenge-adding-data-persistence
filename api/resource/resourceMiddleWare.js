const addResoruce = (req, res, next) => {
    const resource = req.body;
    if(
        resource.resource_name === undefined ||
        typeof resource.resource_name !== 'string' ||
        !resource.resource_name.trim() 
    ){
        next({ status: 400, message: 'invalid resource_name or resource_name already exits' })
    } else {
        next()
    }
}

module.exports = { addResoruce };