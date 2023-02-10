const express = require('express')
const { default: mongoose } = require('mongoose')
const path = require('path')
const app = express()
const port = 8080
const routes = require('./routes/ar')
const bodyparse = require('body-parser')

mongoose.set('strictQuery', true)
mongoose.connect('mongodb+srv://SanamSehray:Sehrayshab1@websitebulding.sfgcbiv.mongodb.net/?retryWrites=true&w=majority')
mongoose.connection.on('error',err=> {
    console.log('connection Failed')
});
mongoose.connection.on('connected', conn =>{
    console.log('connected with Database....');
})
 
app.use(bodyparse.urlencoded({extended:false}))
app.use(bodyparse.json())
app.use('/ar',routes)

app.use((req,res,next)=>{
    res.status(400).json({
        message:" not runnig app is runn"
    })
})

app.listen(port)