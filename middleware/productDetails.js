const connect = require("../config/db")

const insertone = async(req,res)=>{
    try{
       await connect("insertone",req.body,"booksdata")
       res.status(200).send('Success !! added ' + req.body.bookname)
    }catch(e){
        res.status(404).send(e)
    }
}

const getall = async(req,res)=>{
    try{
        const result =  await connect("getall",req.body,"booksdata")
        console.log(result)
        res.status(200).json(result)
    }catch(e){
        res.status(404).send('error occured '+ e);
    }
}

module.exports={
    insertone,
    getall
}