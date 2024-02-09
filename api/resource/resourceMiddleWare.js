const addResoruce = (req, res, next) => {
    const resource = req.body;
    if(
        resource.resource_name === undefined ||
        typeof resource.resource_name !== 'string' ||
        !resource.resource_name.trim() 
    ){
        next({ status: 400, message: 'invalid resource_name' })
    } else {
        next()
    }
}

module.exports = { addResoruce };