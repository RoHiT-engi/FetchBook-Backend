
const mongoose = require('mongoose');
const SellersDataSchema = new mongoose.Schema(
    {
        sellername : {type : String,required :true,unique:true},
        address : {type : String,required :true},
        experience : {type : Number,default : 0},
        certificates : {type : String,default:"no certificate added"},
        phoneno : {type : Number,required :true,unique:true},
        seller_email : {type : String,required :true,unique:true},
        orders : {type:[Object],default:[]}
});
module.exports = mongoose.model('Sellersdata',SellersDataSchema)