const tags=require('./middleware/tags.js')
const express = require('express')
const app = express()
const {bookdata,logs,sellerdata} = require('./dummyData/data')
const adduser = require('./middleware/adduser.js')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))


/************ GET ***************/
//app.use([limit])
app.get('/',(req,res)=>{
    res.send("<h1>welcome to server:)</h1> \n <h2>/api/v1/products => gives all products</h2> \n <h2>/api/v1/log => book seller details</h2> <h2>/api/v1/sellerdata => for seller data</h2>"
    +" <h2>/api/v1/query => for queries</h2>")

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
/************post**************/
app.post('/api/v1/adduser',adduser)

app.listen(5000, ()=>{
    console.log('server is listening on port 5000 ...clt+c to stop')
})