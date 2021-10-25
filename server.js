const tags=require('./middleware/tags.js')
const express = require('express')
const cors = require('cors')
const app = express()
const addsomething = require('./middleware/addseller&user.js')
const products = require('./routes/products')
const seller = require('./routes/seller')
const user = require('./routes/user');
const dotenv = require('dotenv')
dotenv.config()
const port  = process.env.PORT || 5000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes 
app.use('/products',products)
app.use('/seller',seller)
app.use('/user',user)
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
app.get('/query',tags)
/************post**************/
app.post('/adduser',addsomething("adduser"))

app.listen(port, ()=>{
    console.log(`server is listening on port ${port} ...clt+c to stop`)
})

