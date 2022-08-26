const UserModel = require('../models/user')

const createRegister = async(body) =>{
    const newUser = new UserModel(body)
    newUser.save()
    return newUser
}


module.exports = {
    createRegister
}