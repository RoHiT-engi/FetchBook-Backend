const { ObjectId } = require('bson');
const {MongoClient} = require('mongodb');
const { Mongoose } = require('mongoose');
async function connect(request,data,collection){
    const uri = process.env.MONGO_URI
    const client = new MongoClient(uri)
    let result = null
    try{
        await client.connect();
        console.log('Connected to Mongo...' + request + ' ' + collection);
        result=await todo(request,client,data,collection)
    } catch(e){
        console.error(e);
        result=false + e
    }finally{
        await client.close();
    }
    return result;
}

async function todo(request,client,data,collections){
    let result = null;
    switch(request){
        case "uniqueupdate" : 
            await client.db("DataDB").collection(`${collections}`).findOneAndUpdate({"seller_email" :data.seller_email},{$set:{
                "sellername" : data.sellername,
                "seller_email" : data.seller_email,
                "phoneno" : data.phoneno,
                "address" : data.address,
                "certificates" : data.certificates,
                "experience " : data.experience,
            }},{upsert:true});break;
        case "getseller" : 
            result = await client.db("DataDB").collection(`${collections}`).findOne({seller_email: data});break;
        case "getall" : 
            result = await client.db("DataDB").collection(`${collections}`).find({}).toArray();break;
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
             ).toArray();break;
        case "getbook" : 
            result = await client.db("DataDB").collection(`${collections}`).findOne({_id:ObjectId(data)});break;
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
            console.log(data)
            await client.db("DataDB").collection(`${collections}`).deleteOne({"_id" :ObjectId(data)});break;
        case "searchbook" : 
            result = await client.db("DataDB").collection(`${collections}`).find({bookname: data.toString});break;
        case "getuser" :
                result = await client.db("DataDB").collection(`${collections}`).findOne({email: data.toString});break;

        default:console.log(`You passed this request ${request}.`) 
    }
    return result;
}
module.exports = connect
