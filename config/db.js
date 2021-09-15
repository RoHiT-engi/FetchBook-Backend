const {MongoClient} = require('mongodb');
async function connect(request,data){
    const uri = "mongodb+srv://Rohit123:Rohit123@fetchbookback.hidvq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    const client = new MongoClient(uri)
    let result = true
    try{
        await client.connect();
        console.log('Connected to Mongo...');
        await todo(request,client,data)
    } catch(e){
        console.log('Error Occured :-'+e);
        result = false
    }finally{
        await client.close();
    }
    return result;
}

async function todo(request,client,data){
    if(request == "adduser"){
         await client.db("DataDB").collection("userdata").insertOne(data)
        
    }
}
module.exports = connect
