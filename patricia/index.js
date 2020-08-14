const express = require('express')
const app =express()
const nodemon = require('nodemon')
const bodyParser = require('body-parser')
const pug = require('pug')
const mainRoutes = require('./routes/mainRoutes')
const path = require('path')
const mongoose = require('mongoose')


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

app.set('views',path.join(__dirname,'views'));
app.set('view engine','pug');

mongoose.connect('mongodb://localhost:27017/CovidReg',{useNewUrlParser:true, useUnifiedTopology:true, useFindAndModify: false},function(err){
    if (err) throw err;
    else
    console.log('Database Connected');  
})

app.use(express.static('public'))


app.use('/', mainRoutes)

app.get('*',()=>{
    res.send('error page')
})

app.listen(3000,(req,res)=>{
    console.log('listening on port 3000');
})