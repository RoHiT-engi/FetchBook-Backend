const connect = require("../config/db")

const getseller = async(req,res,next)=>{
    const {email} = req.query
    if(email){
    try{
        const result = await connect("getseller",email,"sellersdata")
        res.status(200).json(result)
    }catch(e){
        res.status(404).send(e)
    }}
    next()
}

const deleteorder = async(req,res,next)=>{
        try{
            const result = await connect("deleteorder",req.body,"sellersdata")
            res.status(200).json(result)
        }catch(e){
            res.status(404).send(e)
        }
    
    next()
}

const addorder = async(req,res,next)=>{
    try{
            const result = await connect("addorder",req.body,"sellersdata")
            res.status(200).json(result)
        }catch(e){
            res.status(404).send(e)
        }
    next()
}

const updateOrder = async(req,res,next)=>{
    try{
        console.log(req.body)
        const result = await connect("updateOrder",req.body,"sellersdata")
        res.status(200).json(result)
    }catch(e){
        res.status(404).send(e)
    }
    next()
}

const getorders = async(req,res,next)=>{
    const {email} = req.query
    if(email){ 
    try{
        const result = await connect("getorders",email,"sellersdata");
        res.status(200).json(result)
    }catch(e){ 
        res.status(404).send(e)
     }
    }
    next();
}


module.exports={getseller,deleteorder,addorder,updateOrder,getorders}