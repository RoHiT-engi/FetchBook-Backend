const {MongoClient} = require('mongodb');
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
        console.log('Error Occured : of type '+e);
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
            result = await client.db("DataDB").collection(`${collections}`).find();break;
        case "insertone" : 
            result = await client.db("DataDB").collection(`${collections}`).insertOne(data) ; break;
        case "deleteorder" : 
            result = await client.db("DataDB").collection(`${collections}`).update({
                seller_email:data.email.toString
            },{$pull:{orders:{userid:data.userid,bookid:data.bookid}}});break;
        case "isseller" : 
            const is = await client.db("DataDB").collection(`${collections}`).findOne({seller_email: data.toString})
            if(is){console.log(is);return result= "true"};break;
        case "addorder" : 
            result = await client.db("DataDB").collection(`${collections}`).update({
                email : data.email.toString
            },{$push:{orders:{userid:data.userid,bookid:data.bookid}}},{upsert:true});break;
        case "getrandom" : 
            result = await client.db("DataDB").collection(`${collections}`).aggregate(
                [ { $sample: { size: 8 } } ]
             ).toArray;break;
        case "getbook" : 
            result = await client.db("DataDB").collection(`${collections}`).findById(data);break;
        case "updatebook" : 
            await client.db("DataDB").collection(`${collections}`).updateOne({_id :data.id},{
                bookname : data.bookname,
                img:data.img,
                auther : data.auther,
                sellername : data.sellername,
                description : data.description,
                publisher : data.publisher,
                tags : data.tags}   
            );break;
        case "delete" :
            await client.db("DataDB").collection(`${collections}`).deleteOne({_id:data});break;
        case "searchbook" : 
            result = await client.db("DataDB").collection(`${collections}`).find({bookname: data.toString});break;
        case "addorderhistory" :
            await client.db("DataDB").collection(`${collections}`).update({
                email : data.email
            },{$push:{bookid:data.bookid,sellermail:data.sellermail}});break;
        case "removeorderhistory" : 
            await client.db("DataDB").collection(`${collections}`).update({
                email : data.email
            },{$pull:{bookid:data.bookid,sellermail:data.sellermail}});break;
        case "getuser" :
            await client.db("DataDB").collection(`${collections}`).findOne({email:data.toString})
        default:console.log(`You passed this request ${request}.`) 
    }
    return result;
}
module.exports = connect
