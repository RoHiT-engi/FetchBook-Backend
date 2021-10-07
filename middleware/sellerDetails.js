const connect = require("../config/db")
const isseller = async(req,res,next)=>{
    const {email}= req.query
    if(email){
        try{
            const result = await connect("isseller",email,"sellerdata")
            res.status(200).send(result)
        }catch(e){
            res.status(404).send(e)
        }
    }
}

const getseller = async(req,res,next)=>{
    const {email,order,adress} = req.query
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
    const {userid}=req.query
    if(userid){
        try{
            const result = await connect("deleteorder",userid,"sellersdata")
            res.status(200).json(result)
        }catch(e){
            res.status(404).send(e)
        }
    }
    next()
}

const addorder = async(req,res,next)=>{
    const {email} = req.query
    if(email){
        try{
            const result = await connect("addorder",req.body,"sellersdata")
            res.status(200).json(result)
        }catch(e){
            res.status(404).send(e)
        }
    }
}


module.exports={getseller,deleteorder,addorder,isseller}