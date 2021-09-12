import { url } from "inspector";
import { Mongoose } from "mongoose";
const SellersDataSchema = new Mongoose.schema(
    {
        sellerid : 101,
        sellername : {type : String,required :true},
        address : {type : String,required :true},
        experience : {type : Number},
        certificates : {type : url},
        phoneno : {type : String,required :true},
        email : {type : String,required :true},
        books : {type : [String],required :true}
});
module.exports = Mongoose.model('Sellersdata',SellersDataSchema)