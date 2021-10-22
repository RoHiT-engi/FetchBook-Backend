const connect = require("../config/db")
const addorderhistory = async (req,res,next)=>{
    try{
        const result =await connect("addorderhistory",req.body,"userdata")
        res.status(200).send(result)
    }catch(c){
        res.status(404).send(e)
    }
    next()
}
const removeorderhistory = async(req,res,next)=>{
    try{
        const result = await connect("removeorderhistory",req.body,"userdata")
        res.status(200).send(result)
    }catch(c){
        res.status(404).send(e)
    }
    next()
}

const getuser = async(req,res,next)=>{
    const {email} = req.query
    if(email){
    try{
        const result = await connect("getuser",email,"userdata")
        res.status(200).send(result)
    }catch(c){
        res.status(404).send(e)
    }}
    next()
}
 const deleteuser = async (req,res,next)=>{
    const {id} = req.params.id
    if(id){
    try{
        const result = await connect("delete",req.params.id,"userdata")
        res.status(200).send(result)
    }catch(c){
        res.status(404).send(e)
    }}
    next()
 }

module.exports ={addorderhistory,removeorderhistory,getuser,deleteuser}