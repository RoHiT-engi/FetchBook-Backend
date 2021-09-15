import { url } from "inspector";
const mongoose = require('mongoose');
const SellersDataSchema = new mongoose.Schema(
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
module.exports = mongoose.model('Sellersdata',SellersDataSchema)