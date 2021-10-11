const { ObjectId } = require('bson');
const {MongoClient} = require('mongodb');
const { Mongoose } = require('mongoose');
async function connect(request,data,collection){
    const uri = "mongodb+srv://Rohit123:Rohit123@fetchbookback.hidvq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    const client = new MongoClient(uri)
    let result = null
    try{
        await client.connect();
        console.log('Connected to Mongo...');
        result=await todo(request,client,data,collection)
        console.log(result)
    } catch(e){
        console.log(e);
        result=false
    }finally{
        await client.close();
    }
    return result;
}

async function todo(request,client,data,collections){
    let result = null;
    switch(request){
        case "uniqueupdate" : 
            await client.db("DataDB").collection(`${collections}`).createIndex({seller_email:1,sellername:1,phoneno:1,userid:1,username:1},{ unique : true });
            await client.db("DataDB").collection(`${collections}`).updateOne(data,data,{upsert:true});break;
        case "getseller" : 
            result = await client.db("DataDB").collection(`${collections}`).findOne({seller_email: data.toString});break;
        case "getall" : 
            result = await client.db("DataDB").collection(`${collections}`).find({}).toArray;break;
        case "insertone" : 
            result = await client.db("DataDB").collection(`${collections}`).insertOne(data) ; break;
        case "deleteorder" : 
            result = await client.db("DataDB").collection(`${collections}`).update({
                seller_email:data.email
            },{$pull:{"orders":{userid:data.userid,bookid:data.bookid}}});break;
        case "addorder" : 
            result = await client.db("DataDB").collection(`${collections}`).updateOne({
                seller_email:data.email
            },{$push:{"orders":{userid:data.userid,bookid:data.bookid}}});break;
        case "getrandom" : 
            result = await client.db("DataDB").collection(`${collections}`).aggregate(
                [ { $sample: { size: 8 } } ]
             ).toArray;break;
        case "getbook" : 
            result = await client.db("DataDB").collection(`${collections}`).find({_id:ObjectId(data)});break;
        case "updatebook" : 
            await client.db("DataDB").collection(`${collections}`).updateOne({_id :ObjectId(data.id)},{
                bookname : data.bookname,
                img:data.img,
                auther : data.auther,
                sellername : data.sellername,
                description : data.description,
                publisher : data.publisher,
                tags : data.tags}   
            );break;
        case "delete" :
            await client.db("DataDB").collection(`${collections}`).deleteOne({_id :ObjectId(data.id)});break;
        case "searchbook" : 
            result = await client.db("DataDB").collection(`${collections}`).find({bookname: data.toString});break;
        case "addorderhistory" :
            await client.db("DataDB").collection(`${collections}`).updateOne({
                email : data.email
            },{$push:{"order_history":{bookid:data.bookid,sellermail:data.sellermail}}});break;
        case "removeorderhistory" : 
            await client.db("DataDB").collection(`${collections}`).update({
                email : data.email
            },{$pull:{"order_history":{bookid:data.bookid,sellermail:data.sellermail}}});break;
        case "getuser" :
                result = await client.db("DataDB").collection(`${collections}`).findOne({email: data.toString});break;
        case "getsellerbooks" : await client.db("DataDB").collection(`${collections}`).find({sellerid:data});break;
        default:console.log(`You passed this request ${request}.`) 
    }
    return result;
}
module.exports = connect
