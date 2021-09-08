const express = require('express')
const app = express()
const {bookdata,logs,sellerdata} = require('./dummyData/data')

/************ GET ***************/

app.get('/',(req,res)=>{
    res.send('hello')
})

app.get('/api/1.1/products',(req,res)=>{
    res.status(200).json({status :"success",bookdata})
})

app.get('/api/1.1/log',(req,res)=>{
    res.status(200).json({status :"success",logs})
})


app.get('/api/1.1/sellerdata',(req,res)=>{
    res.status(200).json({status :"success",sellerdata})
})
//products
app.get('/api/1.1/query',(req,res)=>{
    const{search,limit}=req.query
    let sortedProducts = [...bookdata.data]
    if(search){
        sortedProducts = sortedProducts.filter((product)=>{
        return product.bookname.startsWith(search)
     })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0,Number(limit))
    }
    if(sortedProducts.limit<1){
        res.status(200).json("no Data Available")
    }
    res.status(200).json(sortedProducts)
})




app.listen(5000, ()=>{
    console.log('server is listening on port 5000 ...clt+c to stop')
})