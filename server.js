const tags=require('./middleware/tags.js')
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {bookdata,logs,sellerdata} = require('./dummyData/data')

/************ GET ***************/
//app.use([limit])
app.get('/',(req,res)=>{
    res.send("welcome to server:) \n| /api/v1/products => gives all products| \n |/api/v1/log => book seller details| \n |/api/v1/sellerdata => for seller data|"
    +" \n |/api/v1/query => for queries|")

})

app.get('/api/v1/products',(req,res)=>{
    res.status(200).json({status :"success",bookdata})
})

app.get('/api/v1/log',(req,res)=>{
    res.status(200).json({status :"success",logs})
})


app.get('/api/v1/sellerdata',(req,res)=>{
    res.status(200).json({status :"success",sellerdata})
})
//products
app.get('/api/v1/query',tags)




app.listen(5000, ()=>{
    console.log('server is listening on port 5000 ...clt+c to stop')
})