const express = require('express')
const router = express.Router()

const userRouter = require('./register')

router.use('/users', userRouter)

module.exports = router