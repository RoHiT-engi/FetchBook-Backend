
const mongoose = require('mongoose');
const SellersDataSchema = new mongoose.Schema(
    {
        sellername : {type : String,required :true,unique:true},
        address : {type : String,required :true},
        experience : {type : Number},
        certificates : {type : String,default:"no certificate added"},
        phoneno : {type : Number,required :true,unique:true},
        seller_email : {type : String,required :true,unique:true},
        books : {type : [String],default:[]},
        orders : {
            userid :{type:String},
            bookid :{type:String}
        }
});
module.exports = mongoose.model('Sellersdata',SellersDataSchema)