const express = require('express');
const router = express.Router()
const { userController } = require('../controllers')

const { createRegister } = userController

router.post('/', async(req,res) =>{
    const body = req.body 

    try{
        const newUser = await createRegister(body)
        res.status(201)
        res.send(newUser)
    } catch (error){
        if (error instanceof mongoose.Error.ValidationError) {
            res.status(400)
            return res.send({
              message: 'Error de validación',
              reason: err.message
            })
          }
          res.status(500)
          return res.send({
            error: err.message
          })
        }
})

module.exports = router