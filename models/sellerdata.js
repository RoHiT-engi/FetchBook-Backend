
const mongoose = require('mongoose');
const SellersDataSchema = new mongoose.Schema(
    {
        sellername : {type : String,required :true,unique:true},
        address : {type : String,required :true},
        experience : {type : Number},
        certificates : {type : String,default:"no certificate added"},
        phoneno : {type : String,required :true,unique:true},
        email : {type : String,required :true},
        books : {type : [String],default:[]}
});
module.exports = mongoose.model('Sellersdata',SellersDataSchema)