const connect = require("../config/db")
const addorderhistory = (req,res,next)=>{
    try{
        const result = connect("addorderhistory",req.body,"userdata")
        res.status(200).send(result)
    }catch(c){
        res.status(404).send(e)
    }
    next()
}
const removeorderhistory = (req,res,next)=>{
    try{
        const result = connect("removeorderhistory",req.body,"userdata")
        res.status(200).send(result)
    }catch(c){
        res.status(404).send(e)
    }
    next()
}

const getuser =(req,res,next)=>{
    const {email} = req.query
    if(email){
    try{
        const result = connect("removeorderhistory",email,"userdata")
        res.status(200).send(result)
    }catch(c){
        res.status(404).send(e)
    }}
    next()
}
 const deleteuser = (req,res,next)=>{
    const {id} = req.params.id
    if(id){
    try{
        const result = connect("delete",req.params.id,"userdata")
        res.status(200).send(result)
    }catch(c){
        res.status(404).send(e)
    }}
    next()
 }

module.exports ={addorderhistory,removeorderhistory,getuser,deleteuser}