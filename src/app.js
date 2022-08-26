const express = require('express');
const app =express();
const cors = require('cors');
const userRouter = require('./apis')

app.use(cors())
app.use(express.json());
app.use('/register/v1', userRouter)

app.use('/', (req,res) =>{
    res.send({
        message: 'Esto esta funcionando'
    })
})

module.exports = app 