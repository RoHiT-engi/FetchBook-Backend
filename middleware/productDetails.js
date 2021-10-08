const connect = require("../config/db")

const insertone = async(req,res,next)=>{
    try{
       await connect("insertone",req.body,"booksdata")
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

const get4offers = async(req,res,next)=>{
    try{
        const result = await connect("getoffersforhome",req.body,"booksdata")
        res.status(200).json(result)
    }catch(e){
        res.status(404).send('error occured '+ e);
    }
    next()

}
const getoffers = async(req,res,next)=>{
    try{
        const result = await connect("getalloffers",req.body,"booksdata")
        res.status(200).json(result)
    }catch(e){
        res.status(404).send('error occured '+ e);
    }
    next()

}

const getbook = async(req,res,next)=>{
    const id = req.params.id
    if(id){
    try{
        const result = await connect("getbook",req.params.id,"booksdata")
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
        const result = await connect("deletebook",req.params.id,"booksdata")
        res.status(200).json(result)
    }catch(e){
        res.status(404).send('error occured '+ e);
    }}
    next()
}

const search = async(req,res,next)=>{
    const search = req.query
    if(search){
    try{
        const result = await connect("searchbook",search,"booksdata")
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
    get4offers,
    getoffers,
    getbook,
    updatebook,
    deletebook,
    search
}