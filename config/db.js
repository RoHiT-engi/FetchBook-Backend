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
        case "uniqueupdate" : await client.db("DataDB").collection(`${collections}`).createIndex({seller_email:1,sellername:1,phoneno:1,userid:1,username:1},{ unique : true });
                    await client.db("DataDB").collection(`${collections}`).updateOne(data,data,{upsert:true});break;
        case "getseller" : result = await client.db("DataDB").collection(`${collections}`).findOne({seller_email: data.toString});break;
        case "getall" : result = await client.db("DataDB").collection(`${collections}`).find();break;
        case "insertone" : result = await client.db("DataDB").collection(`${collections}`).insertOne(data) ; break;
        case "deleteorder" : result = await client.db("DataDB").collection(`${collections}`).updateOne({orders:{
            userid: data.toString
        }},{$unset:{orders:{userid:"",bookid:""}}});break;
        case "isseller" : const is = await client.db("DataDB").collection(`${collections}`).findOne({seller_email: data})
        if(is!=null){console.log(is);return result= "true"}
        // case "addorder" : result = await client.db("DataDB").collection(`${collections}`).updateOne({orders:{
        //     userid:`${data}`
        // }},{orders:{userid:data.userid,bookid:data.bookid}})
        default:console.log(`You passed this request ${request}.`)
    }
    return result;
}
module.exports = connect
