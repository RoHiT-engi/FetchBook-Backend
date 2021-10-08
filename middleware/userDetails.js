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
    try{
        const result = connect("removeorderhistory",req.body,"userdata")
        res.status(200).send(result)
    }catch(c){
        res.status(404).send(e)
    }
    next()
}

module.exports ={addorderhistory,removeorderhistory,getuser}