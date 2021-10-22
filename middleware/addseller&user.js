const connect= require('../config/db')
const SellersDataSchema = require('../models/sellerdata');
const userdataSchema = require('../models/userdata');

module.exports=(todo)=>{
    return async (req,res,next)=>{
    let collection= null
    let schema = null
    let thingtodo = null 
    switch(todo){
        case "adduser" : 
             schema = new userdataSchema(req.body);
             collection = "userdata";
             thingtodo = "uniqueupdate";break;
        case "addseller" : 
             schema = new SellersDataSchema(req.body);
             collection = "sellersdata";
             thingtodo = "uniqueupdate";break;
        default:"dk What to do";
    }

    let result = "This is Default Text";
    try{  
        result = await connect(thingtodo,schema,collection)
        //console.log(result)
        res.status(200).send(result+ ' Success')
    }catch(e){
        console.log(e)
        res.status(404).send(e)
    }
    next()
}}
