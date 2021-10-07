const tags=require('./middleware/tags.js')
const express = require('express')
const cors = require('cors')
const app = express()
const {bookdata,logs,sellerdata} = require('./dummyData/data')
const addsomething = require('./middleware/addseller&user.js')
const products = require('./routes/products')
const seller = require('./routes/seller')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes 
app.use('/products',products)
app.use('/seller',seller)
/************ GET ***************/
//app.use([limit])
app.get('/',(req,res)=>{
    res.send("<h1>welcome to server:)</h1>")

})

/**********prev api********/
// app.get('/log',(req,res)=>{
//     res.status(200).json({status :"success",logs})
// })


// app.get('/sellerdata',(req,res)=>{
//     res.status(200).json({status :"success",sellerdata})
// })
// //products
// app.get('/query',tags)
/************post**************/
app.post('/adduser',addsomething("adduser"))

app.listen(5000, ()=>{
    console.log('server is listening on port 5000 ...clt+c to stop')
})

