const connect = require("../config/db")
const BookDataSchema = require('../models/booksdata')
const insertone = async(req,res,next)=>{
    const schema  = new BookDataSchema(req.body)
    try{
       await connect("insertone",schema,"booksdata")
       res.status(200).send('Success !! added ' + req.body.bookname)
    }catch(e){
        res.status(404).send(e)
    }
    next()
}

const getall = async(req,res,next)=>{
    try{
        const result =  await connect("getall",req.body,"booksdata")
        res.status(200).json(result)
    }catch(e){
        res.status(404).send('error occured '+ e);
    }
    next()

}

const getrandom = async(req,res,next)=>{
    try{
        const result = await connect("getrandom",req.body,"booksdata")
        res.status(200).json(result)
    }catch(e){
        res.status(404).send('error occured '+ e);
    }
} 


const getbook = async(req,res,next)=>{
    const {email} = req.query
    if(email){
    try{
        const result = await connect("getbook",req.query,"booksdata")
        res.status(200).json(result)
    }catch(e){
        res.status(404).send('error occured '+ e);
    }}
    next()
}

const updatebook = async(req,res,next)=>{
    const id = req.params.id;
    const body = req.body
    if(id){
        try{
            const result = await connect("updatebook",{id:req.params.id,body},"booksdata")
            res.status(200).json(result)
        }catch(e){
            res.status(404).send('error occured '+ e);
    }}
    next()
}

const deletebook= async(req,res,next)=>{
    const id = req.params.id
    if(id){
    try{
        const result = await connect("delete",req.params.id,"booksdata")
        res.status(200).json(result)
    }catch(e){
        res.status(404).send('error occured '+ e);
    }}
    next()
}

const search = async(req,res,next)=>{
    const search = req.params.bookname
    if(search){
    try{
        const result = await connect("searchbook",req.params.bookname,"booksdata")
        res.status(200).json(result)
    }catch(e){
        res.status(404).send('error occured '+ e);
    }}
    next()
}

const getsellerbooks = async(req,res,next)=>{
    const {sellerid} = req.query
    if(sellerid){
    try{
        const result = await connect("getsellerbooks",req.query,"booksdata")
        res.status(200).json(result)
    }catch(e){
        res.status(404).send('error occured '+ e);
    }}
    next()
}

module.exports={
    insertone,
    getall,
    getrandom,
    getbook,
    updatebook,
    deletebook,
    search,
    getsellerbooks
}