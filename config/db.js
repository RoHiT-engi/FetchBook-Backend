const {MongoClient} = require('mongodb');
async function connect(request,data,collection){
    const uri = "mongodb+srv://Rohit123:Rohit123@fetchbookback.hidvq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    const client = new MongoClient(uri)
    let result = null
    try{
        await client.connect();
        console.log('Connected to Mongo...');
        let mongores=await todo(request,client,data,collection)
        result=mongores;
    } catch(e){
        console.log('Error Occured : of type '+e);
        result=e
    }finally{
        await client.close();
    }
    return result;
}

async function todo(request,client,data,collections){
    switch(request){
        case "uniqueupdate" : await client.db("DataDB").collection(`${collections}`).createIndex({sellername:1,phoneno:1,userid:1,username:1},{ unique : true });
                    await client.db("DataDB").collection(`${collections}`).updateOne(data,data,{upsert:true});break;
        default:console.log(`You passed this request ${request}.`)
    }
}
module.exports = connect
